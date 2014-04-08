
module.exports = function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every(function(usery){
      return goodUsers.some(function(gooder){
        return gooder.id === usery.id

      })

    })
  };
}
