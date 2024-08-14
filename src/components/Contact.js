import React from 'react';
import {
CONTACT_BANNER,
DILIVERY_1,
DILIVERY_2,
DILIVERY_3,
DILIVERY_4,
INSURANCE_IMG,
MATERNITY_IMG,
PAYOUT_IMG,
RIDE_PARTNER,
SHIFT_IMG,
} from '../utils/constants';

function Contact() {
return (
    <div className="">
    <div className="relative">
        <img
        className="w-full h-[300px] md:h-[450px] lg:h-[600px] object-cover"
        src={CONTACT_BANNER}
        alt="Empty Cart"
        />
        <div className="absolute top-24 right-5 md:right-20 lg:right-[250px] w-[90%] md:w-[350px] h-[300px] border rounded-lg bg-white p-4">
        <div className="text-center">
            <h4 className="text-lg font-semibold">Register as Swiggy Partner</h4>
        </div>
        <div className="mt-6">
            <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full mb-4 border-black rounded-2xl p-2 bg-gray-200 text-black"
            />
            <input
            type="text"
            name="city"
            placeholder="Select a city"
            className="w-full mb-4 border-black rounded-2xl p-2 bg-gray-200 text-black"
            />
            <input
            type="tel"
            name="mobile number"
            placeholder="Enter Mobile Number"
            className="w-full mb-4 border-black rounded-2xl p-2 bg-gray-200 text-black"
            />
            <submit className='bg-orange-600 p-2 rounded-lg text-white ml-[40%] hover:bg-orange-400 hover:scale-[0.9]'>Get OTP</submit>
        </div>
        </div>
    </div>

    <div className="flex flex-col md:flex-row p-4 m-4 mt-10 justify-evenly">
        <div className="w-full md:w-[150px] text-center mb-6 md:mb-0">
        <img src={PAYOUT_IMG} className="mx-auto" />
        <p className="text-lg md:text-xl font-semibold text-gray-500 mt-2">
            Regular payout with exciting bonuses & Incentives
        </p>
        </div>
        <div className="w-full md:w-[150px] text-center mb-6 md:mb-0">
        <img src={SHIFT_IMG} className="mx-auto" />
        <p className="text-lg md:text-xl font-semibold text-gray-500 mt-2">
            Flexibility to work in your choice of shift
        </p>
        </div>
        <div className="w-full md:w-[150px] text-center mb-6 md:mb-0">
        <img src={INSURANCE_IMG} className="mx-auto" />
        <p className="text-lg md:text-xl font-semibold text-gray-500 mt-2">
            Insurance of Rs 12 Lac for you and your family
        </p>
        </div>
        <div className="w-full md:w-[150px] text-center mb-6 md:mb-0">
        <img src={MATERNITY_IMG} className="mx-auto" />
        <p className="text-lg md:text-xl font-semibold text-gray-500 mt-2">
            Maternity and period leave for women partners
        </p>
        </div>
    </div>

    <div className="w-full m-4 p-4 bg-red-100 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-auto mb-6 md:mb-0">
        <img src={RIDE_PARTNER} className="w-full md:w-auto" />
        </div>
        <div className="text-center md:text-left md:mr-[250px] mt-4">
        <div className="mb-12 font-bold text-2xl md:text-3xl lg:text-4xl text-slate-800">
            Get started in <span className="text-orange-600">3 easy steps</span>
        </div>
        <div className="text-gray-700 font-semibold text-xl md:text-2xl lg:text-3xl mb-7">
            Download Swiggy rider app from app store
        </div>
        <div className="text-gray-700 font-semibold text-xl md:text-2xl lg:text-3xl mb-7">
            Fill in details and documents
        </div>
        <div className="text-gray-700 font-semibold text-xl md:text-2xl lg:text-3xl mb-7">
            Collect bag and t-shirt
        </div>

        <button className="bg-orange-600 text-white p-4 rounded-2xl px-10 text-lg md:text-xl hover:scale-90 transition">
            Get Started
        </button>
        </div>
    </div>

    <div className="ml-4 md:ml-9 mt-16 mb-6 text-center md:text-left">
        <div className="text-gray-600 text-3xl md:text-4xl lg:text-5xl">
        Become a part of an{' '}
        <span className="font-bold text-gray-950">awesome fleet</span>
        </div>

        <div className="flex flex-col md:flex-row justify-evenly mt-8 md:mt-16">
        <div className="w-full md:w-auto mb-8 md:mb-0">
            <img className="w-[90%] md:w-[80%] rounded-2xl mx-auto" src={DILIVERY_1} />
            <div className="flex justify-center md:justify-start mt-5 gap-6 text-center md:text-left">
            <div className="font-bold text-gray-700 text-xl md:text-3xl mt-4">3 Lakh+</div>
            <div className="text-gray-400 text-lg md:text-2xl">
                RESTAURANT<br /> PARTNERS
            </div>
            </div>
        </div>
        <div className="w-full md:w-auto mb-8 md:mb-0">
            <img className="w-[90%] md:w-[80%] rounded-2xl mx-auto" src={DILIVERY_2} />
            <div className="flex justify-center md:justify-start mt-5 gap-6 text-center md:text-left">
            <div className="font-bold text-gray-700 text-xl md:text-3xl mt-4">500+</div>
            <div className="text-gray-400 text-lg md:text-2xl m-4">CITIES</div>
            </div>
        </div>
        <div className="w-full md:w-auto mb-8 md:mb-0">
            <img className="w-[90%] md:w-[80%] rounded-2xl mx-auto" src={DILIVERY_3} />
            <div className="flex justify-center md:justify-start mt-5 gap-6 text-center md:text-left">
            <div className="font-bold text-gray-700 text-xl md:text-3xl mt-4">10 Cr+</div>
            <div className="text-gray-400 text-lg md:text-2xl">
                HAPPY<br /> DELIVERIES
            </div>
            </div>
        </div>
        <div className="w-full md:w-auto">
            <img className="w-[90%] md:w-[80%] rounded-2xl mx-auto" src={DILIVERY_4} />
            <div className="flex justify-center md:justify-start mt-5 gap-6 text-center md:text-left">
            <div className="font-bold text-gray-700 text-xl md:text-3xl mt-4">3 Lakh+</div>
            <div className="text-gray-400 text-lg md:text-2xl">
                RESTAURANT<br /> PARTNERS
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
);
}

export default Contact;
