/*A mock random index function for testing purposes.
  It is important for testing to have a deterministic random function.
  This function serves that purpose.*/
function mockRandomIndex() {
  /*It is not particularly relevant what this function returns,
    as long as it's a valid index. Thus, always returning 0 is
    sufficient.*/
  return 0;
}

module.exports = mockRandomIndex;
