import { mapGraph } from "./mapGraph"
  
  const nodes = Object.keys(mapGraph)
  
  const bellmanFord = (graph, source, target) => {
    const distances = {}
    const previous = {}
    nodes.forEach(node => {
      distances[node] = node === source ? 0 : Infinity
      previous[node] = null
    })
  
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes.forEach(node => {
        const currentNode = graph[node]
        
        Object.keys(currentNode).forEach(neighbor => {
          const distance = currentNode[neighbor].distance
          const badWeatherChance = Math.random()
          const speed = 9.26 + badWeatherChance*(18.52 - 9.26) 
          const daysTime = (distance/speed)/24
          const crewMembers = 55
          const dailyWage = 20
          const cost = daysTime*dailyWage*crewMembers
          if (distances[neighbor] > distances[node] + cost) {
            distances[neighbor] = distances[node] + cost
            previous[neighbor] = node
          }
        })
      })
    }
  
    let path = []
    let u = target
    while (previous[u]) {
      path.unshift(u)
      u = previous[u]
    }
    path.unshift(u)
  
    return {
      path,
      distance: distances[target]
    }
  }

  