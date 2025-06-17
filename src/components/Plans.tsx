import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const unitCards = [
  {
    name: "OPTIMAX",
    imgUrl: "/optimax.png",
  },
  {
    name: "OPTIMAX PLUS",
    imgUrl: "/optimax-plus.png",
  },
  {
    name: "OPTILUX 1",
    imgUrl: "/optilux-1.png",
  },
  {
    name: "OPTILUX 2",
    imgUrl: "/optilux-2.png",
  },
];

const miscCards = [
  {
    name: "GROUND FLOOR",
    imgUrl: "/ground-floor.png",
  },
  {
    name: "GROUND FLOOR COMMERCIAL",
    imgUrl: "/ground-floor-commercial.png",
  },
];

const floorCards = [
  {
    name: "TYPICAL FLOOR",
    imgUrl: "/typical-floor.png",
  },
  {
    name: "REFUGEE FLOOR",
    imgUrl: "/refugee-floor.png",
  },
];

const flatCards = [
  {
    name: "FIRST FLOOR + AMENITY",
    imgUrl: "/first-floor.png",
  },
  {
    name: "MEZZANINE FLOOR",
    imgUrl: "/mezzanine-floor.png",
  },
  {
    name: "GROUND FLOOR",
    imgUrl: "/ground-floor-flat.png",
  },
  {
    name: "BASEMENT FLOOR",
    imgUrl: "/basement-floor.png",
  },
];

const Plans = () => {
  return (
    <>
      {/* Mobile */}
      <div className="lg:hidden bg-linear-to-b from-[#CE3631] to-[#E64237E5] text-white flex flex-col items-center justify-center montserrat-regular p-[20px] gap-6">
        <div className="bg-[url('gaikwad-pattern-red-white.png')] bg-[length:100%_100%] bg-no-repeat">
          <h2 className="text-xl font-semibold">PLANS</h2>
          {/* Tabs */}
          <div className="flex border rounded-xl">
            <button className="px-3 py-2 bg-white text-[#CE3631] rounded-l-xl border-r">
              Unit
            </button>
            <button className="px-3 py-2 border-r">Floor</button>
            <button className="px-3 py-2 border-r">Floor (Layout)</button>
            <button className="px-3 py-2 ">Misc</button>
          </div>
          <div>
            <h2 className="text-center font-semibold text-xl">OPTIMAX</h2>
            <div className="flex flex-col items-center">
              <img src="/uniqo-unit-plan.png" alt="" />
              <button className="bg-white rounded-2xl px-4 py-2 text-black mb-4">
                View & Download
              </button>
              <div className="flex gap-3">
                <img
                  src="/icons/comp-proj-left-arrow.png"
                  alt=""
                  className="w-16"
                />
                <img
                  src="/icons/comp-proj-right-arrow.png"
                  alt=""
                  className="w-16"
                />
              </div>
              <button className="bg-white rounded-2xl px-4 py-2 text-black mb-3 uppercase font-medium mt-4">
                Download Masterplan & Pricing
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Web */}
      <div className="hidden bg-linear-to-r from-[#CE3631] to-[#E64237E5] text-white lg:flex flex-col items-center justify-center montserrat-regular">
        <div className="bg-[url('/gaikwad-pattern-red-white.png')] bg-[length:100%_100%] bg-no-repeat px-12 p-10">
          <h2 className="text-3xl font-semibold pb-8 text-center">PLANS</h2>
          <div>
            <Tabs
              defaultValue="unit"
              className="flex flex-col items-center justify-center gap-8"
            >
              <TabsList>
                <TabsTrigger value="unit">Unit</TabsTrigger>
                <TabsTrigger value="floor">Floor (Flat Only)</TabsTrigger>
                <TabsTrigger value="flat">Floor (Flat + Layout)</TabsTrigger>
                <TabsTrigger value="misc">Misc</TabsTrigger>
              </TabsList>
              {/* Unit */}
              <TabsContent
                value="unit"
                className="flex flex-col items-center justify-center gap-8"
              >
                <div className="flex gap-12 w-full">
                  {unitCards.map((card, index) => (
                    <UnitCard
                      imgUrl={card.imgUrl}
                      name={card.name}
                      key={index}
                    />
                  ))}
                </div>
                <button className="bg-white text-black rounded-lg text-center px-3 py-2">
                  Download Site PLan PDF
                </button>
              </TabsContent>
              {/* Floor */}
              <TabsContent
                value="floor"
                className="flex flex-col items-center justify-center gap-8"
              >
                <div className="flex gap-12 w-1/2">
                  {floorCards.map((card, index) => (
                    <UnitCard
                      imgUrl={card.imgUrl}
                      name={card.name}
                      key={index}
                    />
                  ))}
                </div>
                <button className="bg-white text-black rounded-lg text-center px-3 py-2">
                  Download Site PLan PDF
                </button>
              </TabsContent>
              {/* Flat */}
              <TabsContent
                value="flat"
                className="flex flex-col items-center justify-center gap-8"
              >
                <div className="flex gap-12 w-full">
                  {flatCards.map((card, index) => (
                    <UnitCard
                      imgUrl={card.imgUrl}
                      name={card.name}
                      key={index}
                    />
                  ))}
                </div>
                <button className="bg-white text-black rounded-lg text-center px-3 py-2">
                  Download Site PLan PDF
                </button>
              </TabsContent>
              <TabsContent
                value="misc"
                className="flex flex-col items-center justify-center gap-8"
              >
                <div className="flex gap-12 w-1/2">
                  {miscCards.map((card, index) => (
                    <UnitCard
                      imgUrl={card.imgUrl}
                      name={card.name}
                      key={index}
                    />
                  ))}
                </div>
                <button className="bg-white text-black rounded-lg text-center px-3 py-2">
                  Download Site PLan PDF
                </button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;

const UnitCard = ({ name, imgUrl }: { name: string; imgUrl: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <h2 className="font-medium">{name}</h2>
      <img src={imgUrl} alt={name} className="wfull h-auto" />
      <button className="bg-white text-black rounded-lg text-center px-3 py-2">
        View & Download
      </button>
    </div>
  );
};
