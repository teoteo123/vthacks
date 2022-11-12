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

    modifier listingNotRented(
        uint256 _id,
        uint256 _start,
        uint256 _end
    ) {
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

    event LogListingRented(
        address renter,
        uint32 id,
        uint256 start,
        uint256 end
    );

    function applyForListing(
        uint32 _id,
        uint64 _start,
        uint64 _end
    )
        public
        listingExists(_id)
        listingNotRented(_id, _start, _end)
        notOwnerApplying(_id)
    {
        while (_start <= _end) {
            listings[_id].rentedDates[_start / 256] |= 1 << (_start % 256);
            _start++;
        }
        listings[_id].renters.push(msg.sender);
        listings[_id].rentDates.push([_start, _end]);

        emit LogListingRented(msg.sender, _id, _start, _end);
    }

    function getListings() public view returns (Listing[] memory) {
        return listings;
    }
}
