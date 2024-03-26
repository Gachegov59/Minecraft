# Minecraft

In our version of the game, we will use a 2D pre-generated world (meaning, our world will be hardcoded).
1. The user will have 3 types of tools:
    a. Axe - for cutting trees
    b. Pickaxe - for mining rocks
    c. Shovel - for digging dirt
2. Clicking on a tool followed by clicking on a tile in the world will remove the tile. 
    (If it is of the correct type according to #1) and add it to the inventory.
3. Users can click on the tile in the inventory and place it back in the world (just the last one).


- Do not use 3D-party plugins
- A reset button that will reset the world to its initial state.


Tips
1. Prefer using CSS classes instead of dynamically changing CSS properties in JS.
2. The background-image property would be a better choice than <img> for tiles.
3. Create an object that holds all the logic.
4. Break down the main functionalities in different functions.
5. Hardcode the containers in HTML.
6. Separate your concerns. A separate HTML file, CSS file and JS file.

Geek out
Extra Features:
● Add the ability to remember more than the last tile clicked (maintain the user’s inventory) Add more tools
● Add more tiles
● Make it responsive
● Allow the user to set the world width and height
● Add themes (changing a theme should change the world’s textures)
● Add more than one world type
● Make the world wider than the screen and allow scrolling
● Add fade-in/out effect when adding/removing tiles Unleash the ninja within
● Randomize the generation of the world (make it reasonable, trees should be on grass, nothing floating in the air, etc).