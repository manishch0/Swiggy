export function filterData(filterRestraunt, search) {
  const filterData = filterRestraunt.filter((res) =>
    res?.data.name?.toLowerCase().includes(search.toLowerCase())
  );
  return filterData;
}
