
//import tileData from "json/tiles.js"
//const tiles = JSON.parse(tileData);
const gameboard = document.getElementById("gameBoard");
const players = document.getElementById("players");
let playerTiles = document.getElementById("playerTiles");

let activePlayer = 0;

// player details
let playerList = 
[
    {
        "PlayerID": 0,
        "PlayerNumber": 1,
        "Cash": 6000,
        "PlayerLabel": "Player 1",
        "AltLabel": "(custom names)",
        "TrayLabel": "Player 1 Tray",
        "WalletLabel": "Player 1 Wallet",
        "StockPortfolioLabel": "Player 1 Portfolio"
    },
    {
        "PlayerID": 1,
        "PlayerNumber": 2,
        "Cash": 500,
        "PlayerLabel": "Player 2",
        "AltLabel": "(custom names)",
        "TrayLabel": "Player 2 Tray",
        "WalletLabel": "Player 2 Wallet",
        "StockPortfolioLabel": "Player 2 Portfolio"
    },
    {
        "PlayerID": 2,
        "PlayerNumber": 3,
        "Cash": 300,
        "PlayerLabel": "Player 3",
        "AltLabel": "(custom names)",
        "TrayLabel": "Player 3 Tray",
        "WalletLabel": "Player 3 Wallet",
        "StockPortfolioLabel": "Player 3 Portfolio"
    },
    {
        "PlayerID": 3,
        "PlayerNumber": 4,
        "Cash": 4500,
        "PlayerLabel": "Player 4",
        "AltLabel": "(custom names)",
        "TrayLabel": "Player 4 Tray",
        "WalletLabel": "Player 4 Wallet",
        "StockPortfolioLabel": "Player 4 Portfolio"
    },
    {
        "PlayerID": 4,
        "PlayerNumber": 5,
        "Cash": 2500,
        "PlayerLabel": "Player 5",
        "AltLabel": "(custom names)",
        "TrayLabel": "Player 5 Tray",
        "WalletLabel": "Player 5 Wallet",
        "StockPortfolioLabel": "Player 5 Portfolio"
    },
    {
        "PlayerID": 5,
        "PlayerNumber": 6,
        "Cash": 12000,
        "PlayerLabel": "Player 6",
        "AltLabel": "(custom names)",
        "TrayLabel": "Player 6 Tray",
        "WalletLabel": "Player 6 Wallet",
        "StockPortfolioLabel": "Player 6 Portfolio"
    }
];

let tiles = [
    {
      "id": 0,
      "row": "A",
      "col": 1,
      "label": "1A",
      "state": 0,
      "x": 1,
      "y": 1,
      "right": "2A",
      "bottom": "1B"
    },
    {
      "id": 1,
      "row": "A",
      "col": 2,
      "label": "2A",
      "state": 0,
      "x": 1,
      "y": 2,
      "left": "1A",
      "right": "3A",
      "bottom": "2B"
    },
    {
      "id": 2,
      "row": "A",
      "col": 3,
      "label": "3A",
      "state": 0,
      "x": 1,
      "y": 3,
      "left": "2A",
      "right": "4A",
      "bottom": "3B"
    },
    {
      "id": 3,
      "row": "A",
      "col": 4,
      "label": "4A",
      "state": 0,
      "x": 1,
      "y": 4,
      "left": "3A",
      "right": "5A",
      "bottom": "4B"
    },
    {
      "id": 4,
      "row": "A",
      "col": 5,
      "label": "5A",
      "state": 0,
      "x": 1,
      "y": 5,
      "left": "4A",
      "right": "6A",
      "bottom": "5B"
    },
    {
      "id": 5,
      "row": "A",
      "col": 6,
      "label": "6A",
      "state": 0,
      "x": 1,
      "y": 6,
      "left": "5A",
      "right": "7A",
      "bottom": "6B"
    },
    {
      "id": 6,
      "row": "A",
      "col": 7,
      "label": "7A",
      "state": 0,
      "x": 1,
      "y": 7,
      "left": "6A",
      "right": "8A",
      "bottom": "7B"
    },
    {
      "id": 7,
      "row": "A",
      "col": 8,
      "label": "8A",
      "state": 0,
      "x": 1,
      "y": 8,
      "left": "7A",
      "right": "9A",
      "bottom": "8B"
    },
    {
      "id": 8,
      "row": "A",
      "col": 9,
      "label": "9A",
      "state": 0,
      "x": 1,
      "y": 9,
      "left": "8A",
      "right": "10A",
      "bottom": "9B"
    },
    {
      "id": 9,
      "row": "A",
      "col": 10,
      "label": "10A",
      "state": 0,
      "x": 1,
      "y": 10,
      "left": "9A",
      "right": "11A",
      "bottom": "10B"
    },
    {
      "id": 10,
      "row": "A",
      "col": 11,
      "label": "11A",
      "state": 0,
      "x": 1,
      "y": 11,
      "left": "10A",
      "right": "12A",
      "bottom": "11B"
    },
    {
      "id": 11,
      "row": "A",
      "col": 12,
      "label": "12A",
      "state": 0,
      "x": 1,
      "y": 12,
      "left": "11A",
      "bottom": "12B"
    },
    {
      "id": 12,
      "row": "B",
      "col": 1,
      "label": "1B",
      "state": 0,
      "x": 2,
      "y": 1,
      "right": "2B",
      "top": "1A",
      "bottom": "1C"
    },
    {
      "id": 13,
      "row": "B",
      "col": 2,
      "label": "2B",
      "state": 0,
      "x": 2,
      "y": 2,
      "left": "1B",
      "right": "3B",
      "top": "2A",
      "bottom": "2C"
    },
    {
      "id": 14,
      "row": "B",
      "col": 3,
      "label": "3B",
      "state": 0,
      "x": 2,
      "y": 3,
      "left": "2B",
      "right": "4B",
      "top": "3A",
      "bottom": "3C"
    },
    {
      "id": 15,
      "row": "B",
      "col": 4,
      "label": "4B",
      "state": 0,
      "x": 2,
      "y": 4,
      "left": "3B",
      "right": "5B",
      "top": "4A",
      "bottom": "4C"
    },
    {
      "id": 16,
      "row": "B",
      "col": 5,
      "label": "5B",
      "state": 0,
      "x": 2,
      "y": 5,
      "left": "4B",
      "right": "6B",
      "top": "5A",
      "bottom": "5C"
    },
    {
      "id": 17,
      "row": "B",
      "col": 6,
      "label": "6B",
      "state": 0,
      "x": 2,
      "y": 6,
      "left": "5B",
      "right": "7B",
      "top": "6A",
      "bottom": "6C"
    },
    {
      "id": 18,
      "row": "B",
      "col": 7,
      "label": "7B",
      "state": 0,
      "x": 2,
      "y": 7,
      "left": "6B",
      "right": "8B",
      "top": "7A",
      "bottom": "7C"
    },
    {
      "id": 19,
      "row": "B",
      "col": 8,
      "label": "8B",
      "state": 0,
      "x": 2,
      "y": 8,
      "left": "7B",
      "right": "9B",
      "top": "8A",
      "bottom": "8C"
    },
    {
      "id": 20,
      "row": "B",
      "col": 9,
      "label": "9B",
      "state": 0,
      "x": 2,
      "y": 9,
      "left": "8B",
      "right": "10B",
      "top": "9A",
      "bottom": "9C"
    },
    {
      "id": 21,
      "row": "B",
      "col": 10,
      "label": "10B",
      "state": 0,
      "x": 2,
      "y": 10,
      "left": "9B",
      "right": "11B",
      "top": "10A",
      "bottom": "10C"
    },
    {
      "id": 22,
      "row": "B",
      "col": 11,
      "label": "11B",
      "state": 0,
      "x": 2,
      "y": 11,
      "left": "10B",
      "right": "12B",
      "top": "11A",
      "bottom": "11C"
    },
    {
      "id": 23,
      "row": "B",
      "col": 12,
      "label": "12B",
      "state": 0,
      "x": 2,
      "y": 12,
      "left": "11B",
      "top": "12A",
      "bottom": "12C"
    },
    {
      "id": 24,
      "row": "C",
      "col": 1,
      "label": "1C",
      "state": 0,
      "x": 3,
      "y": 1,
      "right": "2C",
      "top": "1B",
      "bottom": "1D"
    },
    {
      "id": 25,
      "row": "C",
      "col": 2,
      "label": "2C",
      "state": 0,
      "x": 3,
      "y": 2,
      "left": "1C",
      "right": "3C",
      "top": "2B",
      "bottom": "2D"
    },
    {
      "id": 26,
      "row": "C",
      "col": 3,
      "label": "3C",
      "state": 0,
      "x": 3,
      "y": 3,
      "left": "2C",
      "right": "4C",
      "top": "3B",
      "bottom": "3D"
    },
    {
      "id": 27,
      "row": "C",
      "col": 4,
      "label": "4C",
      "state": 0,
      "x": 3,
      "y": 4,
      "left": "3C",
      "right": "5C",
      "top": "4B",
      "bottom": "4D"
    },
    {
      "id": 28,
      "row": "C",
      "col": 5,
      "label": "5C",
      "state": 0,
      "x": 3,
      "y": 5,
      "left": "4C",
      "right": "6C",
      "top": "5B",
      "bottom": "5D"
    },
    {
      "id": 29,
      "row": "C",
      "col": 6,
      "label": "6C",
      "state": 0,
      "x": 3,
      "y": 6,
      "left": "5C",
      "right": "7C",
      "top": "6B",
      "bottom": "6D"
    },
    {
      "id": 30,
      "row": "C",
      "col": 7,
      "label": "7C",
      "state": 0,
      "x": 3,
      "y": 7,
      "left": "6C",
      "right": "8C",
      "top": "7B",
      "bottom": "7D"
    },
    {
      "id": 31,
      "row": "C",
      "col": 8,
      "label": "8C",
      "state": 0,
      "x": 3,
      "y": 8,
      "left": "7C",
      "right": "9C",
      "top": "8B",
      "bottom": "8D"
    },
    {
      "id": 32,
      "row": "C",
      "col": 9,
      "label": "9C",
      "state": 0,
      "x": 3,
      "y": 9,
      "left": "8C",
      "right": "10C",
      "top": "9B",
      "bottom": "9D"
    },
    {
      "id": 33,
      "row": "C",
      "col": 10,
      "label": "10C",
      "state": 0,
      "x": 3,
      "y": 10,
      "left": "9C",
      "right": "11C",
      "top": "10B",
      "bottom": "10D"
    },
    {
      "id": 34,
      "row": "C",
      "col": 11,
      "label": "11C",
      "state": 0,
      "x": 3,
      "y": 11,
      "left": "10C",
      "right": "12C",
      "top": "11B",
      "bottom": "11D"
    },
    {
      "id": 35,
      "row": "C",
      "col": 12,
      "label": "12C",
      "state": 0,
      "x": 3,
      "y": 12,
      "left": "11C",
      "top": "12B",
      "bottom": "12D"
    },
    {
      "id": 36,
      "row": "D",
      "col": 1,
      "label": "1D",
      "state": 0,
      "x": 4,
      "y": 1,
      "right": "2D",
      "top": "1C",
      "bottom": "1E"
    },
    {
      "id": 37,
      "row": "D",
      "col": 2,
      "label": "2D",
      "state": 0,
      "x": 4,
      "y": 2,
      "left": "1D",
      "right": "3D",
      "top": "2C",
      "bottom": "2E"
    },
    {
      "id": 38,
      "row": "D",
      "col": 3,
      "label": "3D",
      "state": 0,
      "x": 4,
      "y": 3,
      "left": "2D",
      "right": "4D",
      "top": "3C",
      "bottom": "3E"
    },
    {
      "id": 39,
      "row": "D",
      "col": 4,
      "label": "4D",
      "state": 0,
      "x": 4,
      "y": 4,
      "left": "3D",
      "right": "5D",
      "top": "4C",
      "bottom": "4E"
    },
    {
      "id": 40,
      "row": "D",
      "col": 5,
      "label": "5D",
      "state": 0,
      "x": 4,
      "y": 5,
      "left": "4D",
      "right": "6D",
      "top": "5C",
      "bottom": "5E"
    },
    {
      "id": 41,
      "row": "D",
      "col": 6,
      "label": "6D",
      "state": 0,
      "x": 4,
      "y": 6,
      "left": "5D",
      "right": "7D",
      "top": "6C",
      "bottom": "6E"
    },
    {
      "id": 42,
      "row": "D",
      "col": 7,
      "label": "7D",
      "state": 0,
      "x": 4,
      "y": 7,
      "left": "6D",
      "right": "8D",
      "top": "7C",
      "bottom": "7E"
    },
    {
      "id": 43,
      "row": "D",
      "col": 8,
      "label": "8D",
      "state": 0,
      "x": 4,
      "y": 8,
      "left": "7D",
      "right": "9D",
      "top": "8C",
      "bottom": "8E"
    },
    {
      "id": 44,
      "row": "D",
      "col": 9,
      "label": "9D",
      "state": 0,
      "x": 4,
      "y": 9,
      "left": "8D",
      "right": "10D",
      "top": "9C",
      "bottom": "9E"
    },
    {
      "id": 45,
      "row": "D",
      "col": 10,
      "label": "10D",
      "state": 0,
      "x": 4,
      "y": 10,
      "left": "9D",
      "right": "11D",
      "top": "10C",
      "bottom": "10E"
    },
    {
      "id": 46,
      "row": "D",
      "col": 11,
      "label": "11D",
      "state": 0,
      "x": 4,
      "y": 11,
      "left": "10D",
      "right": "12D",
      "top": "11C",
      "bottom": "11E"
    },
    {
      "id": 47,
      "row": "D",
      "col": 12,
      "label": "12D",
      "state": 0,
      "x": 4,
      "y": 12,
      "left": "11D",
      "top": "12C",
      "bottom": "12E"
    },
    {
      "id": 48,
      "row": "E",
      "col": 1,
      "label": "1E",
      "state": 0,
      "x": 5,
      "y": 1,
      "right": "2E",
      "top": "1D",
      "bottom": "1F"
    },
    {
      "id": 49,
      "row": "E",
      "col": 2,
      "label": "2E",
      "state": 0,
      "x": 5,
      "y": 2,
      "left": "1E",
      "right": "3E",
      "top": "2D",
      "bottom": "2F"
    },
    {
      "id": 50,
      "row": "E",
      "col": 3,
      "label": "3E",
      "state": 0,
      "x": 5,
      "y": 3,
      "left": "2E",
      "right": "4E",
      "top": "3D",
      "bottom": "3F"
    },
    {
      "id": 51,
      "row": "E",
      "col": 4,
      "label": "4E",
      "state": 0,
      "x": 5,
      "y": 4,
      "left": "3E",
      "right": "5E",
      "top": "4D",
      "bottom": "4F"
    },
    {
      "id": 52,
      "row": "E",
      "col": 5,
      "label": "5E",
      "state": 0,
      "x": 5,
      "y": 5,
      "left": "4E",
      "right": "6E",
      "top": "5D",
      "bottom": "5F"
    },
    {
      "id": 53,
      "row": "E",
      "col": 6,
      "label": "6E",
      "state": 0,
      "x": 5,
      "y": 6,
      "left": "5E",
      "right": "7E",
      "top": "6D",
      "bottom": "6F"
    },
    {
      "id": 54,
      "row": "E",
      "col": 7,
      "label": "7E",
      "state": 0,
      "x": 5,
      "y": 7,
      "left": "6E",
      "right": "8E",
      "top": "7D",
      "bottom": "7F"
    },
    {
      "id": 55,
      "row": "E",
      "col": 8,
      "label": "8E",
      "state": 0,
      "x": 5,
      "y": 8,
      "left": "7E",
      "right": "9E",
      "top": "8D",
      "bottom": "8F"
    },
    {
      "id": 56,
      "row": "E",
      "col": 9,
      "label": "9E",
      "state": 0,
      "x": 5,
      "y": 9,
      "left": "8E",
      "right": "10E",
      "top": "9D",
      "bottom": "9F"
    },
    {
      "id": 57,
      "row": "E",
      "col": 10,
      "label": "10E",
      "state": 0,
      "x": 5,
      "y": 10,
      "left": "9E",
      "right": "11E",
      "top": "10D",
      "bottom": "10F"
    },
    {
      "id": 58,
      "row": "E",
      "col": 11,
      "label": "11E",
      "state": 0,
      "x": 5,
      "y": 11,
      "left": "10E",
      "right": "12E",
      "top": "11D",
      "bottom": "11F"
    },
    {
      "id": 59,
      "row": "E",
      "col": 12,
      "label": "12E",
      "state": 0,
      "x": 5,
      "y": 12,
      "left": "11E",
      "top": "12D",
      "bottom": "12F"
    },
    {
      "id": 60,
      "row": "F",
      "col": 1,
      "label": "1F",
      "state": 0,
      "x": 6,
      "y": 1,
      "right": "2F",
      "top": "1E",
      "bottom": "1G"
    },
    {
      "id": 61,
      "row": "F",
      "col": 2,
      "label": "2F",
      "state": 0,
      "x": 6,
      "y": 2,
      "left": "1F",
      "right": "3F",
      "top": "2E",
      "bottom": "2G"
    },
    {
      "id": 62,
      "row": "F",
      "col": 3,
      "label": "3F",
      "state": 0,
      "x": 6,
      "y": 3,
      "left": "2F",
      "right": "4F",
      "top": "3E",
      "bottom": "3G"
    },
    {
      "id": 63,
      "row": "F",
      "col": 4,
      "label": "4F",
      "state": 0,
      "x": 6,
      "y": 4,
      "left": "3F",
      "right": "5F",
      "top": "4E",
      "bottom": "4G"
    },
    {
      "id": 64,
      "row": "F",
      "col": 5,
      "label": "5F",
      "state": 0,
      "x": 6,
      "y": 5,
      "left": "4F",
      "right": "6F",
      "top": "5E",
      "bottom": "5G"
    },
    {
      "id": 65,
      "row": "F",
      "col": 6,
      "label": "6F",
      "state": 0,
      "x": 6,
      "y": 6,
      "left": "5F",
      "right": "7F",
      "top": "6E",
      "bottom": "6G"
    },
    {
      "id": 66,
      "row": "F",
      "col": 7,
      "label": "7F",
      "state": 0,
      "x": 6,
      "y": 7,
      "left": "6F",
      "right": "8F",
      "top": "7E",
      "bottom": "7G"
    },
    {
      "id": 67,
      "row": "F",
      "col": 8,
      "label": "8F",
      "state": 0,
      "x": 6,
      "y": 8,
      "left": "7F",
      "right": "9F",
      "top": "8E",
      "bottom": "8G"
    },
    {
      "id": 68,
      "row": "F",
      "col": 9,
      "label": "9F",
      "state": 0,
      "x": 6,
      "y": 9,
      "left": "8F",
      "right": "10F",
      "top": "9E",
      "bottom": "9G"
    },
    {
      "id": 69,
      "row": "F",
      "col": 10,
      "label": "10F",
      "state": 0,
      "x": 6,
      "y": 10,
      "left": "9F",
      "right": "11F",
      "top": "10E",
      "bottom": "10G"
    },
    {
      "id": 70,
      "row": "F",
      "col": 11,
      "label": "11F",
      "state": 0,
      "x": 6,
      "y": 11,
      "left": "10F",
      "right": "12F",
      "top": "11E",
      "bottom": "11G"
    },
    {
      "id": 71,
      "row": "F",
      "col": 12,
      "label": "12F",
      "state": 0,
      "x": 6,
      "y": 12,
      "left": "11F",
      "top": "12E",
      "bottom": "12G"
    },
    {
      "id": 72,
      "row": "G",
      "col": 1,
      "label": "1G",
      "state": 0,
      "x": 7,
      "y": 1,
      "right": "2G",
      "top": "1F",
      "bottom": "1H"
    },
    {
      "id": 73,
      "row": "G",
      "col": 2,
      "label": "2G",
      "state": 0,
      "x": 7,
      "y": 2,
      "left": "1G",
      "right": "3G",
      "top": "2F",
      "bottom": "2H"
    },
    {
      "id": 74,
      "row": "G",
      "col": 3,
      "label": "3G",
      "state": 0,
      "x": 7,
      "y": 3,
      "left": "2G",
      "right": "4G",
      "top": "3F",
      "bottom": "3H"
    },
    {
      "id": 75,
      "row": "G",
      "col": 4,
      "label": "4G",
      "state": 0,
      "x": 7,
      "y": 4,
      "left": "3G",
      "right": "5G",
      "top": "4F",
      "bottom": "4H"
    },
    {
      "id": 76,
      "row": "G",
      "col": 5,
      "label": "5G",
      "state": 0,
      "x": 7,
      "y": 5,
      "left": "4G",
      "right": "6G",
      "top": "5F",
      "bottom": "5H"
    },
    {
      "id": 77,
      "row": "G",
      "col": 6,
      "label": "6G",
      "state": 0,
      "x": 7,
      "y": 6,
      "left": "5G",
      "right": "7G",
      "top": "6F",
      "bottom": "6H"
    },
    {
      "id": 78,
      "row": "G",
      "col": 7,
      "label": "7G",
      "state": 0,
      "x": 7,
      "y": 7,
      "left": "6G",
      "right": "8G",
      "top": "7F",
      "bottom": "7H"
    },
    {
      "id": 79,
      "row": "G",
      "col": 8,
      "label": "8G",
      "state": 0,
      "x": 7,
      "y": 8,
      "left": "7G",
      "right": "9G",
      "top": "8F",
      "bottom": "8H"
    },
    {
      "id": 80,
      "row": "G",
      "col": 9,
      "label": "9G",
      "state": 0,
      "x": 7,
      "y": 9,
      "left": "8G",
      "right": "10G",
      "top": "9F",
      "bottom": "9H"
    },
    {
      "id": 81,
      "row": "G",
      "col": 10,
      "label": "10G",
      "state": 0,
      "x": 7,
      "y": 10,
      "left": "9G",
      "right": "11G",
      "top": "10F",
      "bottom": "10H"
    },
    {
      "id": 82,
      "row": "G",
      "col": 11,
      "label": "11G",
      "state": 0,
      "x": 7,
      "y": 11,
      "left": "10G",
      "right": "12G",
      "top": "11F",
      "bottom": "11H"
    },
    {
      "id": 83,
      "row": "G",
      "col": 12,
      "label": "12G",
      "state": 0,
      "x": 7,
      "y": 12,
      "left": "11G",
      "top": "12F",
      "bottom": "12H"
    },
    {
      "id": 84,
      "row": "H",
      "col": 1,
      "label": "1H",
      "state": 0,
      "x": 8,
      "y": 1,
      "right": "2H",
      "top": "1G",
      "bottom": "1I"
    },
    {
      "id": 85,
      "row": "H",
      "col": 2,
      "label": "2H",
      "state": 0,
      "x": 8,
      "y": 2,
      "left": "1H",
      "right": "3H",
      "top": "2G",
      "bottom": "2I"
    },
    {
      "id": 86,
      "row": "H",
      "col": 3,
      "label": "3H",
      "state": 0,
      "x": 8,
      "y": 3,
      "left": "2H",
      "right": "4H",
      "top": "3G",
      "bottom": "3I"
    },
    {
      "id": 87,
      "row": "H",
      "col": 4,
      "label": "4H",
      "state": 0,
      "x": 8,
      "y": 4,
      "left": "3H",
      "right": "5H",
      "top": "4G",
      "bottom": "4I"
    },
    {
      "id": 88,
      "row": "H",
      "col": 5,
      "label": "5H",
      "state": 0,
      "x": 8,
      "y": 5,
      "left": "4H",
      "right": "6H",
      "top": "5G",
      "bottom": "5I"
    },
    {
      "id": 89,
      "row": "H",
      "col": 6,
      "label": "6H",
      "state": 0,
      "x": 8,
      "y": 6,
      "left": "5H",
      "right": "7H",
      "top": "6G",
      "bottom": "6I"
    },
    {
      "id": 90,
      "row": "H",
      "col": 7,
      "label": "7H",
      "state": 0,
      "x": 8,
      "y": 7,
      "left": "6H",
      "right": "8H",
      "top": "7G",
      "bottom": "7I"
    },
    {
      "id": 91,
      "row": "H",
      "col": 8,
      "label": "8H",
      "state": 0,
      "x": 8,
      "y": 8,
      "left": "7H",
      "right": "9H",
      "top": "8G",
      "bottom": "8I"
    },
    {
      "id": 92,
      "row": "H",
      "col": 9,
      "label": "9H",
      "state": 0,
      "x": 8,
      "y": 9,
      "left": "8H",
      "right": "10H",
      "top": "9G",
      "bottom": "9I"
    },
    {
      "id": 93,
      "row": "H",
      "col": 10,
      "label": "10H",
      "state": 0,
      "x": 8,
      "y": 10,
      "left": "9H",
      "right": "11H",
      "top": "10G",
      "bottom": "10I"
    },
    {
      "id": 94,
      "row": "H",
      "col": 11,
      "label": "11H",
      "state": 0,
      "x": 8,
      "y": 11,
      "left": "10H",
      "right": "12H",
      "top": "11G",
      "bottom": "11I"
    },
    {
      "id": 95,
      "row": "H",
      "col": 12,
      "label": "12H",
      "state": 0,
      "x": 8,
      "y": 12,
      "left": "11H",
      "top": "12G",
      "bottom": "12I"
    },
    {
      "id": 96,
      "row": "I",
      "col": 1,
      "label": "1I",
      "state": 0,
      "x": 9,
      "y": 1,
      "right": "2I",
      "top": "1H"
    },
    {
      "id": 97,
      "row": "I",
      "col": 2,
      "label": "2I",
      "state": 0,
      "x": 9,
      "y": 2,
      "left": "1I",
      "right": "3I",
      "top": "2H"
    },
    {
      "id": 98,
      "row": "I",
      "col": 3,
      "label": "3I",
      "state": 0,
      "x": 9,
      "y": 3,
      "left": "2I",
      "right": "4I",
      "top": "3H"
    },
    {
      "id": 99,
      "row": "I",
      "col": 4,
      "label": "4I",
      "state": 0,
      "x": 9,
      "y": 4,
      "left": "3I",
      "right": "5I",
      "top": "4H"
    },
    {
      "id": 100,
      "row": "I",
      "col": 5,
      "label": "5I",
      "state": 0,
      "x": 9,
      "y": 5,
      "left": "4I",
      "right": "6I",
      "top": "5H"
    },
    {
      "id": 101,
      "row": "I",
      "col": 6,
      "label": "6I",
      "state": 0,
      "x": 9,
      "y": 6,
      "left": "5I",
      "right": "7I",
      "top": "6H"
    },
    {
      "id": 102,
      "row": "I",
      "col": 7,
      "label": "7I",
      "state": 0,
      "x": 9,
      "y": 7,
      "left": "6I",
      "right": "8I",
      "top": "7H"
    },
    {
      "id": 103,
      "row": "I",
      "col": 8,
      "label": "8I",
      "state": 0,
      "x": 9,
      "y": 8,
      "left": "7I",
      "right": "9I",
      "top": "8H"
    },
    {
      "id": 104,
      "row": "I",
      "col": 9,
      "label": "9I",
      "state": 0,
      "x": 9,
      "y": 9,
      "left": "8I",
      "right": "10I",
      "top": "9H"
    },
    {
      "id": 105,
      "row": "I",
      "col": 10,
      "label": "10I",
      "state": 0,
      "x": 9,
      "y": 10,
      "left": "9I",
      "right": "11I",
      "top": "10H"
    },
    {
      "id": 106,
      "row": "I",
      "col": 11,
      "label": "11I",
      "state": 0,
      "x": 9,
      "y": 11,
      "left": "10I",
      "right": "12I",
      "top": "11H"
    },
    {
      "id": 107,
      "row": "I",
      "col": 12,
      "label": "12I",
      "state": 0,
      "x": 9,
      "y": 12,
      "left": "11I",
      "top": "12H"
    }
  ];

function init()
{
    makeRows(9, 12);
    makePlayers();

    let playerCash = document.getElementById("playerCash");
    playerCash.innerText = (playerList[activePlayer].Cash);

    getPlayerTiles(activePlayer);

}

const playerCount = Object.keys(playerList).length;

function makePlayers()
{
    
    for (c = 0; c < playerCount; c++) 
    {
        let cell = document.createElement("i");
        //cell.innerText = (col + 1 + (row+10).toString(36));
        cell.innerText = (playerList[c].PlayerLabel);

        const playerID = playerList[c].PlayerID;

        players.appendChild(cell).className = "col-lg-2 bi bi-person-circle badge bg-light text-dark";
        players.appendChild(cell).id = 'player' + playerID;

        generateRandomTiles(playerID);
    };

    let activePlayerStart = document.getElementById("player" + activePlayer);
    // add style

    activePlayerStart.classList.remove('bg-light','text-dark');
    activePlayerStart.classList.add('bg-primary');
}


// https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript
function makeRows(rows, cols) 
{
    gameboard.style.setProperty('--grid-rows', rows);
    gameboard.style.setProperty('--grid-cols', cols);

    // count number of tiles
    const length = Object.keys(tiles).length;
  
    for (c = 0; c < length; c++) {
        let cell = document.createElement("div");
        

    //cell.innerText = (col + 1 + (row+10).toString(36));
    cell.innerText = (tiles[c].label);

    gameboard.appendChild(cell).className = "grid-item";
    gameboard.appendChild(cell).id = tiles[c].label;
  };
};



// move to the next active player
function setNextPlayer()
{
    // remove active style
    let prevPlayer = document.getElementById("player" + activePlayer);
    if(prevPlayer != null)
    {
        prevPlayer.classList.remove('bg-primary');
        prevPlayer.classList.add('bg-light','text-dark');
    }

    // if last player, reset to first player
    if(activePlayer == playerCount - 1)
    {
        activePlayer = 0;
    }else{
        activePlayer = activePlayer + 1;
    }
    console.log(activePlayer)
    
    let nextPlayer = document.getElementById("player" + activePlayer);
    // add style
    nextPlayer.classList.remove('bg-light','text-dark');
    nextPlayer.classList.add('bg-primary');


    let playerCash = document.getElementById("playerCash");
    playerCash.innerText = (playerList[activePlayer].Cash);

    getPlayerTiles(activePlayer);
}


function getPlayerTiles(playerID)
{
    const length = Object.keys(tiles).length;

    // recreate player tiles.
    while (playerTiles.firstChild) {
        playerTiles.firstChild.remove()
    }

    // Create player tiles
    for (c = 0; c < length; c++) 
    {
        if(tiles[c].owner == playerID && tiles[c].state == 0)
        {
            //console.log(tiles[c].owner + ' | ' + playerID)

            let pt = "playerTile" + tiles[c].id;
       
            let tile = document.createElement("div");
            //tile.innerText = tiles[c].label;

            playerTiles.appendChild(tile).className = "col-lg-2";

            playerTiles.appendChild(tile).id = pt;

            let tileButton = document.createElement("a");
            tileButton.innerText = tiles[c].label;

            tile.appendChild(tileButton).className = "p-2 btn btn-primary";
            const tileLabel = tiles[c].label;
            const tileIndex = c;
            //console.log(tiles[c].label) 


            tileButton.addEventListener('click', function (event) {
            
                let gameTile = document.getElementById(tileLabel);

                gameTile.style.backgroundColor = "blue";
                gameTile.style.color = "white";

                replaceUsedTile(playerID,tileIndex);

                checkSidesForTiles (tiles[tileIndex]);

                // move to next player's turn
                setNextPlayer();
            
            });

        }

    }
}

function replaceUsedTile(playerID,clickedTile)
{
    const length = Object.keys(tiles).length;
    const remainingTiles = [];
    tiles[clickedTile].state = 1;
    //console.log(playerID + clickedTile);

    // check for remaining tiles.
    for (c = 0; c < length; c++) 
    {
        if(tiles[c].owner == null)
        {
            remainingTiles.push(c);
        }

    }

    if(remainingTiles.length > 0)
    {
        const rand = Math.floor(Math.random() * remainingTiles.length);
        //console.log('rand: ' + rand);
        const randoTileIndex = remainingTiles[rand];
        //console.log('randIndex: ' + remainingTiles)
    
        tiles[randoTileIndex].owner = playerID;
    }
    

}

function generateRandomTiles(playerID)
{
    const length = Object.keys(tiles).length;
    
    let randomTiles = [];
    
    while (randomTiles.length < 6) 
    {
        const rand = Math.floor(Math.random() * length);

        if(tiles[rand].owner == null && tiles[rand].state == 0)
        {
            tiles[rand].owner = playerID;
            randomTiles.push(tiles[rand].label);
        }
    }

    //console.log(randomTiles);
}

function checkSidesForTiles (tile)
{
    const length = Object.keys(tiles).length;
    console.log('clicked tile: ' + tile.label);
    for (c = 0; c < length; c++) 
    {
        const sideTile = tiles[c].label
        console.log(tile.left + ' ' + tile.right + ' ' + tile.top + ' ' + tile.bottom)
        if(tiles[c].state == 1)
        {
            console.log(tile.left + ' ' + tile.right + ' ' + tile.top + ' ' + tile.bottom)

            const tileElement = document.getElementById(tile.label);
            const sideTileElement = document.getElementById(sideTile);
            

            if(sideTile == tile.left)
            {
                tileElement.style.backgroundColor = "green";
                sideTileElement.style.backgroundColor = "green";

                alert('Yay! You (' + tile.label + ') found a friend (' + sideTile + ') to the LEFT!')
            }else if(sideTile == tile.right)
            {
                tileElement.style.backgroundColor = "green";
                sideTileElement.style.backgroundColor = "green";
                alert('Yay! You (' + tile.label + ') found a friend (' + sideTile + ') to the RIGHT!')
            }else if(sideTile == tile.top)
            {
                tileElement.style.backgroundColor = "green";
                sideTileElement.style.backgroundColor = "green";
                alert('Yay! You (' + tile.label + ') found a friend (' + sideTile + ') to the TOP!')
            }
            else if(sideTile == tile.bottom)
            {
                tileElement.style.backgroundColor = "green";
                sideTileElement.style.backgroundColor = "green";
                alert('Yay! You (' + tile.label + ') found a friend (' + sideTile + ') to the BOTTOM!')
            }
        }
           

        
    }
    
}


init();

const myModal = document.getElementById('buyModel')

myModal.addEventListener('shown.bs.modal', function () {

})


