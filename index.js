function calculateVertical(start, end) {
  return Math.abs(end - start) * 264
}
function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42)
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(start, end) {
  return calculateVertical(start, end)
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination) 
  
  switch (true) {
    case distance < 400: 
      return 0;
  }
}