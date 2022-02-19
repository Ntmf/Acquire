# Acquire

TODO: 
- Initial Randomizer when games starts. Automatically put 1 tile per player and place on the board.
- test build

Game Rules and Logic:

Acquire Rules

1. Setup
 - All tiles start face down in the tile box.
 - All players start with $6000.
 - Each player draws a random tile from the tile box. The player with the closest tile to 1A goes first. 
 - In the event 2 or more tiles are adjacent, thay are considered "unincorporated" until an addition tile is added later, then they become incorporated.
 - All players draw 6 tiles and place them in their tile tray.
 - Other: Players have an option to show/hide their currency and/or stocks.

2. Game Play
Each player does the following things in order:
 - Play a tile onto the board by placing it on its matching space.
 - Buy stocks of any actice corporation. Maximum buy limit of 3 stocks per turn.
 - Draw a new tile from the tile box. 

3. Playing a Tile
Depending on where a tile is played, it may:
 - Form a corporation
 - Merge 2 or more corporations
 - Do nothing (except add a tile to the board)

Founding a corporation
 - When a player places a tile next to an unincorporated tile already on the board a corporation is founded. The founder selects an available corporation (one that is not already founded.)

Merging Corporations
 - When a player places a tile that will connect 2 or more founded corporations, a merger takes place. The larger of the corporations (most tiles) survives and the smaller corporation(s) become defunct(unfounded).

 - Safe corporations
	• A corporation that contains 11 or more tiles is considered “safe” and cannot be absorbed by another corporation for the rest of the game.
	• A safe corporation can absorb a smaller corporation.
	• 2 or more safe corporations cannot merge. Any tile that would merge 2 safe corporations is permanently unplayable for the rest of the game.

 - Majority and minority stockholder’s bonuses
	• At the time of a merger, the player with the most and second-most stocks in the defunct corporation(s) are declared majority and minority stockholders and are paid majority and minority bonuses respectively, unless…
	• If only one player owns stock in the defunct corporation that player gets majority and minority bonuses
	• If there is a tie for majority stockholder then Majority and Minority bonuses are added together and divided evenly between the tied players. The minority stockholder receives no bonus.
	• If there is a tie for minority stockholder, minority bonus is split evenly between minority stockholders
	• Bonus amounts are determined by the stock value and size of the corporation being absorbed.

 - After Bonuses have been paid out each player must decide what to do with the defunct stock. 
Each player, starting with the mergemaker and continuing in player turn order, can hold, sell and trade the defunct stock.
	• Hold – Stock may be held in expectation of starting the corporation again later.
	• Sell – Stock may be sold at the price determined by the number of tiles in the defunct corporation before the merger.
	• Trade – Stock may be traded 2(defunct stock) for 1(surviving corporation stock) until there is no more of the surviving corporation stock available.
(Note: Players can choose more than one of the above options, ie. Hold some, Sell some, Trade some.)

 - Multiple Mergers
It is possible that one tile could cause the merger of 3 or 4 corporations. The largest corporation survives, and the smaller ones become defunct. The mergemaker breaks any ties.
The smaller corporations are dealt with – one at a time – from largest to smallest. Majority and minority stockholder bonuses are paid out as described previously, and then the defunct stock is held,sold or traded. Mergemaker goes first.


4. Buying Stocks
 - After Placing a tile, the player may buy stock in any active corporation. This is optional. A player may decide to buy none or up to three stocks on a turn. There are only 25 stock per corporation. You cannot buy a stock in an active corporation if the stock is sold out.

 - Price per share is determined by the base price of the corporation plus a modifier amount based on the number of tiles. 


5. Drawing a Tile
 - A player takes a tile from the Tile Box to replace the tile that was played at the beginning of the player’s turn. At this time if the player has any permanently unplayable tiles (ones that merge two safe corporations), that player puts the unplayable tile to the side (faceup) and draws and equal number of replacement tiles.

 - This can only be done once per turn. If more unplayable tiles are drawn, the player must wait until his/her next turn to discard them. Tiles that would form an eighth corporation cannot be traded in.

 - Drawing a tile signifies the end of that player’s turn.


6. End of Game
 - The game ends when one player, during his/her turn, announces that either all active corporations are safe or that one corporation has 41 or more tiles on the game board

 - A player does not have to announce that the game is over if it is to his/her advantage to continue playing. After announce that the game is over, the player may finish the turn.

 - Majority and minority shareholders’ bonuses are paid out for all active corporations, and all stock are sold back to the stock market bank at current prices.

 - Stock in a corporation that is not on the board are worthless. The player with the most money wins.
