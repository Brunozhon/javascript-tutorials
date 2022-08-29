function getNameFromSearch(search) {
  var params = new URLSearchParams(search)
  return params.get("firstName") ?? params.get("givenName") ?? params.get("name")
}
