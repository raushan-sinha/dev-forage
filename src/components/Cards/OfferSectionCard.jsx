import React from 'react'

const OfferSectionCard = ({ cards }) => {
    return (
        <>
            {cards.map((item, index) => (
                <div
                    key={index}
                    className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
                >
                    <img className='relative mx-4 -mt-6 h-40 w-auto rounded-xl object-cover shadow-lg' src={item.image} alt={item.alt} />

                    <div className="p-6">
                        <h5 className="mb-2 text-xl font-semibold text-gray-900">
                            {item.title}
                        </h5>

                        <p className="text-base text-black font-mono font-medium">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default OfferSectionCard;