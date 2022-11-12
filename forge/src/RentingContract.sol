// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.13;

contract RentingContract {
    struct Listing {
        address owner;
        string propertyName;
        string propertyDescription;
        string propertyAddress;
        string[] images;
        uint128 price;
        address[] renters;
        uint256[2][] rentDates;
        // rentDates is a bitmap that stores two years worth of rent dates
        // each bit represents a day, 0 is not rented, 1 is rented
        uint256[3] rentedDates;
        Application[] pendingApplications;
    }

    struct Application {
        address applicant;
        uint256 start;
        uint256 end;
    }

    Listing[] listings;

    event LogListingAdded(
        address owner,
        string propertyName,
        string propertyDescription,
        string propertyAddress,
        string[] images,
        uint128 price
    );

    function addListing(
        string memory _propertyName,
        string memory _propertyDescription,
        string memory _propertyAddress,
        string[] memory _images,
        uint128 _price
    ) public returns (uint256 id) {
        Listing storage newListing = listings[listings.length];
        newListing.owner = msg.sender;
        newListing.propertyName = _propertyName;
        newListing.propertyDescription = _propertyDescription;
        newListing.propertyAddress = _propertyAddress;
        newListing.images = _images;
        newListing.price = _price;

        emit LogListingAdded(
            msg.sender,
            _propertyName,
            _propertyDescription,
            _propertyAddress,
            _images,
            _price
        );

        return listings.length - 1;
    }

    modifier listingExists(uint256 _id) {
        require(_id < listings.length, "Listing with this id does not exist");
        _;
    }

    modifier listingNotRented(uint256 _id, uint256 _applicationId) {
        uint256 _start = listings[_id]
            .pendingApplications[_applicationId]
            .start;
        uint256 _end = listings[_id].pendingApplications[_applicationId].end;
        require(_start < _end, "Start date must be before end date");
        require(_end - _start <= 365 * 2, "Cannot rent for more than 2 years");
        for (uint256 i = _start; i < _end; i++) {
            require(
                (listings[_id].rentedDates[i / 256] & (1 << (i % 256))) == 0,
                "Listing is already rented for this date"
            );
        }
        _;
    }

    modifier notOwnerApplying(uint256 _id) {
        require(
            listings[_id].owner != msg.sender,
            "Owner cannot rent his own listing"
        );
        _;
    }

    event LogApplicationSent(uint256 listingId, uint256 start, uint256 end);

    function applyForListing(
        uint256 _id,
        uint256 _start,
        uint256 _end
    ) public listingExists(_id) notOwnerApplying(_id) {
        listings[_id].pendingApplications.push(
            Application(msg.sender, _start, _end)
        );

        emit LogApplicationSent(_id, _start, _end);
    }

    modifier ownerApproving(uint256 _id) {
        require(
            listings[_id].owner == msg.sender,
            "Only owner can approve an application"
        );
        _;
    }

    event LogApplicationApproved(
        address renter,
        uint32 id,
        uint256 start,
        uint256 end
    );

    function approveApplication(uint32 _id, uint32 _applicationId)
        public
        listingExists(_id)
        listingNotRented(_id, _applicationId)
        ownerApproving(_id)
    {
        uint256 _start = listings[_id]
            .pendingApplications[_applicationId]
            .start;
        uint256 _end = listings[_id].pendingApplications[_applicationId].end;
        address _renter = listings[_id]
            .pendingApplications[_applicationId]
            .applicant;
        for (uint256 day = _start; day <= _end; day++) {
            listings[_id].rentedDates[day / 256] |= 1 << (day % 256);
        }
        listings[_id].renters.push(_renter);
        listings[_id].rentDates.push([_start, _end]);

        emit LogApplicationApproved(_renter, _id, _start, _end);

        delete listings[_id].pendingApplications[_applicationId];

        // look for all applications that cannot be approved anymore and delete them
        uint256 numApplications = listings[_id].pendingApplications.length;
        for (uint256 i = 0; i < numApplications; i++) {
            uint256 _currentStart = listings[_id].pendingApplications[i].start;
            uint256 _currentEnd = listings[_id].pendingApplications[i].end;
            for (uint256 day = _currentStart; day <= _currentEnd; day++) {
                if (_start <= day && day <= _end) {
                    delete listings[_id].pendingApplications[i];
                    i--;
                    numApplications--;
                    break;
                }
            }
        }
    }

    function getListings() public view returns (Listing[] memory) {
        return listings;
    }

    function getListingById(uint256 _id)
        public
        view
        listingExists(_id)
        returns (Listing memory)
    {
        return listings[_id];
    }

    function getApplicationsForListing(uint256 _id)
        public
        view
        listingExists(_id)
        returns (Application[] memory)
    {
        return listings[_id].pendingApplications;
    }
}
