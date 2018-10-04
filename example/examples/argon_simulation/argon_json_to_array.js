function argon_json_to_array (json_array, number_of_atoms) {
    
/* creates a 2d array argon_array[i][j] where 
    i = number of frames in the simulaiton
    j = number of atoms in the simulations
*/
    //***note 1000 is the number of atoms in the argon simulation
    
    var argon_array = [];
    var count = 0;
    for (var i=0; i< json_array.length; i+=1000) {

        var temp = [];
        for (var j=i; j< (i+1000); j++) {
            console.log(i);
            temp.push([json_array[j].x, json_array[j].y, json_array[j].z]);
        }
        argon_array.push(temp);
    }
    

    
    return argon_array;
}

