const ColorPalette = () => {
  return (
    <div className="fixed top-4 left-4 p-4 bg-cream rounded-lg shadow-lg">
      <h3 className="font-poppins mb-2 text-black">Color Palette</h3>
      <div className="space-y-2">
        <div className="flex gap-2 items-center">
          <div className="w-12 h-12 rounded bg-primary-900" />
          <p className="text-sm">900</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-12 h-12 rounded bg-primary-700" />
          <p className="text-sm">700</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-12 h-12 rounded bg-primary-500" />
          <p className="text-sm">500</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-12 h-12 rounded bg-primary-300" />
          <p className="text-sm">300</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-12 h-12 rounded bg-primary-100" />
          <p className="text-sm">100</p>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
