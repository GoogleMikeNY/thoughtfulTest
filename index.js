const MAX_DIMENSION_SIZE_IN_CM = 150;
const MAX_VOLUME_SIZE_IN_CM = 1000000;
const MAX_WEIGHT_IN_KG = 20;

const sort = (width, height, length, mass) => {
  const isAnyDimensionAtOrOverMaxDimensionSize =
    width >= MAX_DIMENSION_SIZE_IN_CM ||
    height >= MAX_DIMENSION_SIZE_IN_CM ||
    length >= MAX_DIMENSION_SIZE_IN_CM;
  const volume = width * height * length;
  const isPackageBulky =
    volume >= MAX_VOLUME_SIZE_IN_CM || isAnyDimensionAtOrOverMaxDimensionSize;
  const isPackageHeavy = mass >= MAX_WEIGHT_IN_KG;

  if (isPackageBulky && isPackageHeavy) {
    return "**REJECTED**";
  }
  if (isPackageBulky || isPackageHeavy) {
    return "**SPECIAL**";
  }

  return "**STANDARD**";
};

module.exports = sort;
