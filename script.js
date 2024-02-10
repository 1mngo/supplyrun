var items = {
  'milk':{
    'dairy':{
      'nonfat':[0, 16, 0], 
      '2%':[0, 20, 0], 
      'whole':[0, 4, 0], 
      'heavy cream':[0, 9, 0], 
      'half n half':[0, 6, 0]
    },
    'alt':{
      'oat':[0, 17, 0],
      'soy':[0, 10, 0], 
      'coconut':[0, 7, 0], 
      'almond':[0, 7, 0]
    }
  },
  'cups':{
    'hot':{
      'short':[0, 2, 0],
      'tall':[0, 2, 0],
      'grande':[0, 3, 0],
      'venti':[0, 3, 0]
    },
    'cold':{
      'tall':[0, 2, 0],
      'grande':[0, 3, 0],
      'venti':[0, 3, 0],
      'trenta':[0, 2, 0]
    }
  },
  'lids':{
    'hot':{
      'short':[0, 2, 0],
      'tall':[0, 3, 0],
      'grande/venti':[0, 3, 0]
    },
    'cold':{
      'tall flat':[0, 2, 0],
      'grande/venti flat':[0, 2, 0],
      'trenta flat':[0, 2, 0],
      'tall nitro':[0, 2, 0],
      'tall dome':[0, 1, 0],
      'grande/venti nitro':[0, 1, 0],
      'grande/venti dome':[0, 1, 0]
    }
  }
}

var contentz = '';

for(var i in items) {
  var section = '';
  for(var j in items[i]) {
    var subsection = '';
    for(var k in items[i][j]) {
      subsection += '<div class="item" id="' + k + '"><p>' + k + '</p><label>have: </label><input min=0 id="' + k + 'i" type="number" value="' + items[i][j][k][0] + '"> ' + '<p id="' + k + 'o">need: </p></div>';
    }
    section += '<div class="subsection" id="' + j + '"><h3>' + j + '</h3>' + subsection + '</div>';
  }
  contentz += '<div class="section" id="' + i + '"><h2>' + i + '</h2>' + section + '</div>';
}

$('#items').html(contentz)



function update() {
  for(var i in items) {
    for(var j in items[i]) {
      for(var k in items[i][j]) {
        items[i][j][k][0] = $('[id="' + k + 'i"]').val();
        items[i][j][k][2] = Number(items[i][j][k][1]) - Number(items[i][j][k][0]);
        $('[id="' + k + 'o"]').html('need: ' + items[i][j][k][2])
      }
    }
  }
}

update();

$('input').change(update);