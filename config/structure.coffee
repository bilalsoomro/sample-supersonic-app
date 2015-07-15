# Read more about app structure at http://docs.appgyver.com

module.exports =

  rootView:
    location: "example#getting-started"

  preloads: [
    {
      id: "using-the-scanner"
      location: "example#using-the-scanner"
    }
  ]

  drawers:
    left:
      id: "leftDrawer"
      location: "example#drawer"
      showOnAppLoad: false
    options:
      animation: "swingingDoor"