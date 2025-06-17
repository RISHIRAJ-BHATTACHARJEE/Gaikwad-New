import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/unico-accordion"
  import React from "react";
  
  // Memoized LandmarkItem component to prevent unnecessary re-renders
  const LandmarkItem = React.memo(
    ({ name, distance }: { name: string; distance: string }) => (
      <li className="flex items-center justify-between">
        <p className="font-medium">{name}</p>
        <p>{distance}</p>
      </li>
    )
  );
  
  // Dynamic data structure for landmarks
  const landmarkData = [
    {
      id: "schools",
      category: "Schools",
      icon: "/icons/school.png",
      items: [
        { id: "school-1", name: "Delhi Public School", distance: "1.2km" },
        {
          id: "school-2",
          name: "St. Thomas Residential School",
          distance: "1.2km",
        },
        { id: "school-3", name: "The Gurukul", distance: "2.5km" },
      ],
    },
    {
      id: "hospitals",
      category: "Hospitals",
      icon: "/icons/hospital.png",
      items: [
        { id: "hospital-1", name: "Apollo Hospital", distance: "1.5km" },
        { id: "hospital-2", name: "Fortis Hospital", distance: "2.0km" },
        { id: "hospital-3", name: "Max Healthcare", distance: "3.0km" },
      ],
    },
    {
      id: "malls",
      category: "Malls",
      icon: "/icons/malls.png",
      items: [
        { id: "mall-1", name: "Select Citywalk", distance: "2.2km" },
        { id: "mall-2", name: "DLF Promenade", distance: "3.5km" },
        { id: "mall-3", name: "Ambience Mall", distance: "4.0km" },
      ],
    },
    {
      id: "corporate",
      category: "Corporate",
      icon: "/icons/corporate.png",
      items: [
        { id: "corporate-1", name: "Cyber Hub", distance: "2.8km" },
        { id: "corporate-2", name: "Unitech Business Park", distance: "3.2km" },
        { id: "corporate-3", name: "DLF Corporate Greens", distance: "4.5km" },
      ],
    },
    {
      id: "hotels",
      category: "Hotels",
      icon: "/icons/hotels.png",
      items: [
        { id: "hotel-1", name: "Taj Palace", distance: "2.0km" },
        { id: "hotel-2", name: "Hyatt Regency", distance: "2.5km" },
        { id: "hotel-3", name: "The Leela", distance: "3.8km" },
      ],
    },
  ];
  
  const Landmark = () => {
    return (
      <div className="bg-gradient-to-b from-[#CE3631] to-[#E64237E5] montserrat-regular text-white">
        <div className="bg-[url('/mobile-pattern.png')] bg-[length:510px_510px] bg-repeat bg-bottom p-5 flex flex-col gap-12 py-12">
          <h2 className="text-xl lg:text-3xl uppercase text-center font-bold">
            A Signature Landmark Location
          </h2>
          <div className="flex flex-col lg:flex-row lg:mx-auto gap-12 lg:w-[80%] ">
            {/* Dark Card */}
            <div className="bg-[#17262A] rounded-xl lg:w-full bg-[url('/mobile-pattern.png')] bg-[length:100%_100%] bg-repeat bg-center 2xl:max-h-[550px] xl:max-h-[500px]">
              <div className="p-15">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue="schools"
                >
                  {landmarkData.map(({ id, category, icon, items }) => (
                    <AccordionItem key={id} value={id}>
                      <AccordionTrigger>
                        <div className="flex items-center gap-2 lg:gap-3">
                          <img loading="lazy" src={icon} alt="" className="w-7 lg:w-8" />
                          <h2 className="lg:text-xl">{category}</h2>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="flex flex-col gap-4 text-balance lg:pl-12">
                          {items.map((item) => (
                            <LandmarkItem
                              key={item.id}
                              name={item.name}
                              distance={item.distance}
                            />
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
  
            <img src="/icons/map.png" alt="" className="w-1/2 2xl:max-h-[550px] xl:max-h-[500px]"/>
          </div>
        </div>
      </div>
    );
  };
  
  export default Landmark;
  