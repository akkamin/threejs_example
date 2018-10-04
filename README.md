# threejs_example

-note that the paths for the threejs and loader files are relative to the files that reference them, 
so if you move files around you will have to update paths

-example.zip is the zip file containing the project files

-human_only_low_poly_for_glb_export_that_works.zip is the blender file of the human model (sorry about the name)

note: this can only be run on a server, if you try to run in on your local computer some 
of the files will not be able to load due to cross referencing. 

-the glb file often gets messed up during transfer, 
especially if there is limited space on wherever this will be hosted. Unless the animation size is small
or there is a lot of space on the webserver, i do not recommend trying to load 3d glb models. 
This is more proof that it actually works

-landing_project2.html is the "homepage" 

-the argon_simulation is in the argon folder in the examples folder.
  
    -the argon_positions.js file is the way particle data is kept 
    (I am certain that is not the ideal way to handle that, but I couldn't  think of anything better)
   
    -the argon_json_to_array.js just converts the json array to a regular array

-the person running is in the examples folder.
  
    -the actual model is in the models/gltf folder
  
    -you can view glb files using a https://gltf-viewer.donmccurdy.com/ 
    if you make your own to make sure they exported properly.
  
    -it took a while to figure out the exporting format in blender. 
    I also attached the blender file for refernece. 
    In order to view it you will need to download blender
    and install the gltf addon, links are in the landing page
  

