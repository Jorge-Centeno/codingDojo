const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema(
  {
    playerName: {
        type: String,
        required: [true, 'Player name is Required!'],
    },
    imageUrl: {
      type: String,
      required: [true, 'Image URL is Required!'],
    },
    playerNumber: {
      type: Number,
      required: [true, 'Player number is Required!'],
    },
    playerInformation: {
      type: String,
      required: [true, 'Player information is Required!'],
    },
    playerPosition: {
      type: String,
      required: [true, 'Player position is Required!'],
      enum:[
        'RHP',
        'LHP',
        'C',
        '1B',
        '2B',
        '3B',
        'SS',
        'Outfield',
      ],
    },
    classOf: {
      type: Number,
      required: [true, 'Graduating year is Required!'],
    },
    throws: {
        type: String,
        required: [true, 'Please tell us what arm you throw with!'],
      },
    bats: {
        type: String,
        required: [true, 'Please tell us what side of the plate you bat on!'],
      },
    
  },
  {
    timestamps: true,
  },
);

const Player = mongoose.model('player', PlayerSchema);
module.exports = Player;
