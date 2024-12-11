// src/app/components/sections/FeaturedWorks.tsx
export default function FeaturedWorks() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
      <div className="w-full md:w-1/4 lg:w-1/5">
        <h3 className="text-2xl font-semibold mb-4 md:mb-0">Featured Works</h3>
      </div>
      <div className="w-full md:w-3/4 lg:w-4/5">
        <div className="flex flex-col gap-24 mb-24">
          {/* First Row */}
          <div className="grid grid-cols-5 gap-6 w-full">
            <div className="col-span-2 relative aspect-[4/3] bg-white rounded-lg overflow-hidden group"></div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden group flex items-center justify-center">
              <span className="text-2xl font-medium text-white">01/04</span>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-5 gap-6 w-full">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden group flex items-center justify-center col-start-3">
              <span className="text-2xl font-medium text-white">02/04</span>
            </div>
            <div className="col-span-2 relative aspect-[4/3] bg-white rounded-lg overflow-hidden group col-start-4"></div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-5 gap-6 w-full">
            <div className="col-span-2 relative aspect-[4/3] bg-white rounded-lg overflow-hidden group"></div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden group flex items-center justify-center">
              <span className="text-2xl font-medium text-white">03/04</span>
            </div>
          </div>

          {/* Fourth Row */}
          <div className="grid grid-cols-5 gap-6 w-full">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden group flex items-center justify-center col-start-3">
              <span className="text-2xl font-medium text-white">04/04</span>
            </div>
            <div className="col-span-2 relative aspect-[4/3] bg-white rounded-lg overflow-hidden group col-start-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
