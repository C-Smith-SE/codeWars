// Task

// Allocate customers to hotel rooms based on their arrival and departure days. Each customer wants their own room, so two customers can stay in the same room only if the departure day of the first customer is earlier than the arrival day of the second customer. The number of rooms used should be minimized.
// Input

// A list or array of n customers, 1 ≤ n ≤ 1000. Each customer is represented by (arrival_day, departure_day), which are positive integers satisfying arrival_day ≤ departure_day.
// Output

// A list or array of size n, where element i indicates the room that customer i was allocated. Rooms are numbered 1,2, ..., k for some 1 ≤ k ≤ n. Any allocation that minimizes the number of rooms k is a valid solution.
// Example:

// Suppose customers is [(1,5), (2,4), (6,8), (7,7)].
// Clearly customers 1 and 2 cannot get the same room. Customer 3 can use the same room as either of them, because they both leave before customer 3 arrives. Then customer 4 can be given the other room.
// So any of [1,2,1,2], [1,2,2,1], [2,1,2,1], [2,1,1,2] is a valid solution.

// NOTE: The list of customers is not necessarily ordered by arrival_time.


// solution

function allocateRooms(customers) {
    customers = customers.map((x, i) => [i, x]).sort((a, b) => a[1][0] - b[1][0])
    const res = []
    const rooms = []
  
    for (const [ri, cust] of customers) {
      let r = rooms.findIndex((room, i) => room < cust[0])
      if (r === -1) r = rooms.length
  
      rooms[r] = cust[1]
      res[ri] = r+1
    }
  
    return res
  }