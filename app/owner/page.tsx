"use client";
import Card from "../collection/card";
import { Inter } from "@next/font/google";

import { use, useEffect, useRef, useState } from "react";
import {
  addListing,
  approveApplication,
  getListingById,
  getListings,
} from "../collection/interactions";

const inter = Inter();

export default function OwnerDash() {
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const image1Ref = useRef<HTMLInputElement>(null);
  const image2Ref = useRef<HTMLInputElement>(null);
  const image3Ref = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const idRef = useRef<HTMLInputElement>(null);
  const appIdRef = useRef<HTMLInputElement>(null);

  const [listing, setListing] = useState<any>(null);
  const [id, setId] = useState<number>(0);

  const handleIdChange = () => {
    getListingById(idRef.current?.value as any).then((l) => {
      setListing(l);
    });
  };

  // application[] |

  // const approve = () => {
  // 	approveApplication()
  // }

  const handleSubmit = () => {
    const data = {
      propertyInfo: {
        name: nameRef.current?.value.trim(),
        description: descriptionRef.current?.value.trim(),
        location: locationRef.current?.value.trim(),
      },
      images: [
        image1Ref.current?.value.trim(),
        image2Ref.current?.value.trim(),
        image3Ref.current?.value.trim(),
      ],
      price: priceRef.current?.value,
    };
    addListing(data);
  };

  const handleApprove = () => {
    const appId = appIdRef.current?.value;
    const id = idRef.current?.value;
    approveApplication(id as any, appId as any);
  };

  return (
    <>
      <div
        className="flex flex-row grid-cols-6 gap-6 col-span-6 sm:col-span-3
      bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900
      text-white min-h-[3000px] items-align"
      >
        <div
          id="left"
          className="flex flex-col items-center 
          space-y-2 w-1/2 border-r-[1px] 
          border-r-[#c4c4c4] p-4 justify-start"
        >
          <div className={inter.className}>
            <p className="text-3xl mb-5 mt-5">Add Listing</p>
          </div>
          <div className="w-1/2">
            <input
              type="text"
              className="w-full inline-block shadow-sm border-gray-300 
              rounded-lg 
              m-2 focus:ring-2 focus:ring-indigo-200
               focus:border-indigo-400 text-black"
              placeholder="Name"
              ref={nameRef}
            ></input>
          </div>
          <div className="w-1/2">
            <input
              type="text"
              className="w-full shadow-sm border-gray-300
                rounded-lg m-2 focus:ring-2
                 focus:ring-indigo-200
                 focus:border-indigo-400 text-black"
              placeholder="Description"
              ref={descriptionRef as any}
            ></input>
          </div>
          <div className="w-1/2">
            <input
              type="text"
              className="w-full shadow-sm border-gray-300 
                rounded-lg m-2 focus:ring-2
                focus:ring-indigo-200
                focus:border-indigo-400 text-black"
              placeholder="Location"
              ref={locationRef as any}
            ></input>
          </div>
          <div className="w-1/2">
            <input
              type="text"
              className="w-full shadow-sm
                 border-gray-300 
                rounded-lg m-2 
                focus:ring-2 
                focus:ring-indigo-200
                focus:border-indigo-400 text-black"
              placeholder="Image 1"
              ref={image1Ref as any}
            ></input>
          </div>
          <div className="w-1/2">
            <input
              type="text"
              className="w-full shadow-sm
                border-gray-300 
                rounded-lg m-2 
                focus:ring-2 
                focus:ring-indigo-200 
                focus:border-indigo-400 text-black"
              placeholder="Image 2"
              ref={image2Ref as any}
            ></input>
          </div>
          <div className="w-1/2">
            <input
              type="text"
              className="w-full shadow-sm border-gray-300 rounded-lg m-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 text-black"
              placeholder="Image 3"
              ref={image3Ref as any}
            ></input>
          </div>
          <div className="w-1/2">
            <input
              type="number"
              className="mb-5 w-full shadow-sm border-gray-300 rounded-lg m-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 text-black"
              placeholder="Price"
              ref={priceRef as any}
            ></input>
          </div>
          <div className="w-3/4">
            <button
              onClick={handleSubmit}
              className="w-full h-10 rounded-md bg-fuchsia-500 text-black"
            >
              Add
            </button>
            <div className="flex flex-col items-center p-4">
              <div className={inter.className}>
                <p className="text-3xl mb-5 mt-5">Approve Application</p>
              </div>
              <div className="">
                <input
                  type="number"
                  ref={appIdRef}
                  className="w-full shadow-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 text-black"
                  placeholder="id"
                />
              </div>
              <div className="w-3/4">
                <button
                  onClick={handleApprove}
                  className="w-full h-10 rounded-md mt-5 bg-fuchsia-500 text-black"
                >
                  Find
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div
          id="right-find-by-id"
          className="flex flex-col items-center w-1/2 p-4"
        >
          <div className={inter.className}>
            <p className="text-3xl mb-5 mt-5">Find Listing</p>
          </div>
          <div className="w-1/2">
            <input
              type="number"
              ref={idRef}
              className="w-full shadow-sm border-gray-300 rounded-lg m-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 text-black"
              placeholder="id"
            />
          </div>
          <div className="w-3/4">
            <button
              onClick={handleIdChange}
              className="w-full h-10 rounded-md mt-5 bg-fuchsia-500 text-black"
            >
              Find
            </button>
          </div>
          {listing && <Card {...listing} />}
        </div>
      </div>
    </>
  );
}
