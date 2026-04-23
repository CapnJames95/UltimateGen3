window.getDistributionEntries = window.getDistributionEntries || function() {
  var projectWonder = [
    {
      title: 'Aurora Ticket',
      source: 'Project Wonder',
      language: 'Multi-language',
      kind: 'Event Item',
      obtains: ['Aurora Ticket'],
      targets: ['FireRed', 'LeafGreen', 'Emerald'],
      details: 'Unlocks the Deoxys trip event path. Built from the JoySpot update patch set.',
      repo: 'Gen3DistributionRoms'
    },
    {
      title: 'Mystic Ticket',
      source: 'Project Wonder',
      language: 'Multi-language',
      kind: 'Event Item',
      obtains: ['Mystic Ticket'],
      targets: ['FireRed', 'LeafGreen', 'Emerald'],
      details: 'Unlocks the Lugia/Ho-Oh island travel event path on compatible saves.',
      repo: 'Gen3DistributionRoms'
    },
    {
      title: 'Eon Ticket',
      source: 'Project Wonder',
      language: 'Multi-language',
      kind: 'Event Item',
      obtains: ['Eon Ticket'],
      targets: ['Emerald only'],
      details: 'Marked by the repo as Emerald-exclusive and will not send to FireRed/LeafGreen.',
      repo: 'Gen3DistributionRoms'
    },
    {
      title: 'Old Sea Map',
      source: 'Project Wonder',
      language: 'Multi-language',
      kind: 'Event Item',
      obtains: ['Old Sea Map'],
      targets: ['Emerald only'],
      details: 'Emerald-exclusive event patch for the Faraway Island access item.',
      repo: 'Gen3DistributionRoms'
    },
    {
      title: 'Decoration Set',
      source: 'Project Wonder',
      language: 'Multi-language',
      kind: 'Custom Event',
      obtains: ['Decoration Set'],
      targets: ['Emerald only'],
      details: 'Custom event added by the repo. Explicitly called out as Emerald-only in the README.',
      repo: 'Gen3DistributionRoms'
    },
    {
      title: 'Mystery Gift',
      source: 'Project Wonder',
      language: 'Multi-language',
      kind: 'Custom Item Event',
      obtains: ['Potion', 'Poké Ball', 'Rare item pool'],
      targets: ['FireRed', 'LeafGreen', 'Emerald'],
      details: 'Delivery-guy event. README notes a Potion/Poké Ball common pool with a rare-item outcome at low odds.',
      mechanics: [
        'Potion odds: values 0-494 out of 1000',
        'Poké Ball odds: values 495-990 out of 1000',
        'Rare item odds: values 991-999 out of 1000'
      ],
      repo: 'Gen3DistributionRoms'
    },
    {
      title: 'Altering Cave',
      source: 'Project Wonder',
      language: 'Multi-language',
      kind: 'Custom Event',
      obtains: ['Altering Cave event state'],
      targets: ['FireRed', 'LeafGreen', 'Emerald'],
      details: 'Patch-based custom distribution intended to enable the Altering Cave style event content.',
      repo: 'Gen3DistributionRoms'
    },
    {
      title: 'Pokémon Egg (PCNY)',
      source: 'Project Wonder',
      language: 'Multi-language',
      kind: 'Egg Distribution',
      obtains: ['Chansey', 'Drowzee', 'Exeggcute', 'Farfetch’d', 'Kangaskhan', 'Lickitung'],
      targets: ['FireRed', 'LeafGreen', 'Emerald'],
      details: 'Random egg pool with button-combo overrides documented in the patch README.',
      mechanics: [
        'A: Chansey',
        'B: Drowzee',
        'A + B: Exeggcute',
        'R: Farfetch’d',
        'R + A: Kangaskhan',
        'R + B: Lickitung'
      ],
      repo: 'Gen3DistributionRoms'
    },
    {
      title: 'Pokémon Egg (PCJP)',
      source: 'Project Wonder',
      language: 'Multi-language',
      kind: 'Egg Distribution',
      obtains: ['Bellsprout', 'Meowth', 'Oddish', 'Poliwag'],
      targets: ['FireRed', 'LeafGreen', 'Emerald'],
      details: 'Random egg pool with button-combo overrides documented in the patch README.',
      mechanics: [
        'A: Bellsprout',
        'B: Meowth',
        'A + B: Oddish',
        'R: Poliwag'
      ],
      repo: 'Gen3DistributionRoms'
    },
    {
      title: 'Pokémon Egg (PARK)',
      source: 'Project Wonder',
      language: 'Multi-language',
      kind: 'Egg Distribution',
      obtains: ['Cacnea', 'Corphish', 'Corsola', 'Igglybuff', 'Minun', 'Pichu', 'Plusle', 'Psyduck', 'Skitty', 'Spinda', 'Spoink', 'Surskit', 'Taillow', 'Whismur', 'Wynaut'],
      targets: ['FireRed', 'LeafGreen', 'Emerald'],
      details: 'PokéPark-style randomized egg pool with 15 possible species and documented button overrides.',
      mechanics: [
        'A: Cacnea',
        'B: Corphish',
        'A + B: Corsola',
        'R: Igglybuff',
        'R + A: Minun',
        'R + B: Pichu',
        'R + A + B: Plusle',
        'L: Psyduck',
        'L + A: Skitty',
        'L + B: Spinda',
        'L + A + B: Spoink',
        'L + R: Surskit',
        'L + R + A: Taillow',
        'L + R + B: Whismur',
        'L + R + A + B: Wynaut'
      ],
      repo: 'Gen3DistributionRoms'
    }
  ];

  var classicEnglish = [
    ['Berry Fix Glitch Zigzagoon', 'English', 'Single Pokémon', ['Zigzagoon'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Berry-fix gift Zigzagoon distribution ROM.', 'Shiny-locked per English README.'],
    ['Channel Jirachi', 'English', 'Single Pokémon', ['Jirachi'], ['Ruby', 'Sapphire'], 'GameCube Channel distribution recreation.', 'One of the English repo exceptions that is not shiny-locked.'],
    ['DOEL Deoxys', 'English', 'Single Pokémon', ['Deoxys'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Named after the DOEL event distribution.', 'Shiny-locked per English README.'],
    ['JAA Celebi', 'English', 'Single Pokémon', ['Celebi'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Celebi event multiboot ROM.', 'Shiny-locked per English README.'],
    ['JAA Top 20 - Part 1', 'English', 'Multi Pokémon Campaign', ['Bulbasaur', 'Charizard', 'Blastoise', 'Pikachu', 'Alakazam', 'Articuno', 'Zapdos', 'Moltres', 'Dragonite', 'Typhlosion'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Part 1 of the JAA Top 20 campaign loader.', 'Species split is inferred from Bulbapedia’s 20-Pokémon Journey Across America list and the repo’s Part 1 / Part 2 filenames.'],
    ['JAA Top 20 - Part 2', 'English', 'Multi Pokémon Campaign', ['Espeon', 'Umbreon', 'Raikou', 'Entei', 'Suicune', 'Tyranitar', 'Blaziken', 'Absol', 'Latias', 'Latios'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Part 2 of the JAA Top 20 campaign loader.', 'Species split is inferred from Bulbapedia’s 20-Pokémon Journey Across America list and the repo’s Part 1 / Part 2 filenames.'],
    ['MYSTRY Mew', 'English', 'Single Pokémon', ['Mew'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Classic MYSTRY Mew-style multiboot ROM.', 'Shiny-locked per English README.'],
    ['POTD Top 20 - Part 1', 'English', 'Multi Pokémon Campaign', ['Top 20 campaign set'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Part 1 of the Pokémon of the Day Top 20 campaign.', 'Repo notes this uses the TOP 10 loader shell with Aura Mew-based multiboot.'],
    ['POTD Top 20 - Part 2', 'English', 'Multi Pokémon Campaign', ['Top 20 campaign set'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Part 2 of the Pokémon of the Day Top 20 campaign.', 'Repo notes this uses the TOP 10 loader shell with Aura Mew-based multiboot.'],
    ['Pokemon Box Eggs', 'English', 'Egg Distribution', ['Pokémon Box egg pool'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'English Pokémon Box egg distribution ROM.', 'English README lists Pokémon Box Eggs as one of the non-shiny-locked exceptions.'],
    ['ROCKS Metang', 'English', 'Single Pokémon', ['Metang'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'ROCKS Metang event recreation.', 'Shiny-locked per English README.'],
    ['SPACE C Deoxys', 'English', 'Single Pokémon', ['Deoxys'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'SPACE C Deoxys event recreation.', 'Shiny-locked per English README.'],
    ['Trade and Battle Day', 'English', 'Campaign Pokémon', ['Ekans', 'Sandshrew', 'Vulpix', 'Oddish', 'Psyduck', 'Growlithe', 'Machoke', 'Slowpoke', 'Shellder', 'Haunter', 'Staryu', 'Tauros'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Theme/event-day distribution ROM.', 'Species list comes from Bulbapedia’s Trade and Battle Day event distribution page.'],
    ['Wishmkr Jirachi', 'English', 'Single Pokémon', ['Jirachi'], ['Ruby', 'Sapphire'], 'Bonus Disc / WISHMKR-style Jirachi distribution.', 'English README lists Wishmkr Jirachi as not shiny-locked.']
  ].map(function(row) {
    return { title: row[0], language: row[1], kind: row[2], obtains: row[3], targets: row[4], details: row[5], notes: row[6], source: 'Classic Distribution ROM' };
  });

  var pcnyCampaigns = [
    ['Ancient and Aliens C', ['Armaldo', 'Sableye', 'Mawile', 'Cradily'], 'Matches Bulbapedia\'s PCNY Ancient & Aliens Week list.'],
    ['Ancient and Aliens D', ['Armaldo', 'Sableye', 'Mawile', 'Cradily'], 'Matches Bulbapedia\'s PCNY Ancient & Aliens Week list.'],
    ['Baby and Trade C', ['Azurill', 'Wynaut', 'Gorebyss', 'Huntail'], 'Matches Bulbapedia\'s PCNY Baby & Trade Week list.'],
    ['Baby and Trade D', ['Azurill', 'Wynaut', 'Gorebyss', 'Huntail'], 'Matches Bulbapedia\'s PCNY Baby & Trade Week list.'],
    ['Box Campaign C', ['Flygon', 'Seviper', 'Spite Absol', 'Wish Absol'], 'Mapped to Bulbapedia\'s Pokémon Box Ruby & Sapphire promotion list; filename match is inferential.'],
    ['Box Campaign D', ['Flygon', 'Seviper', 'Spite Absol', 'Wish Absol'], 'Mapped to Bulbapedia\'s Pokémon Box Ruby & Sapphire promotion list; filename match is inferential.'],
    ['Dragon Week C', ['Ice Beam Seadra', 'Leer Seadra', 'Flygon', 'Flamethrower Altaria', 'Ice Beam Altaria', 'Salamence'], 'Matches Bulbapedia\'s PCNY Dragon Week list.'],
    ['Dragon Week D', ['Ice Beam Seadra', 'Leer Seadra', 'Flygon', 'Flamethrower Altaria', 'Ice Beam Altaria', 'Salamence'], 'Matches Bulbapedia\'s PCNY Dragon Week list.'],
    ['Evolution Stones B', ['Pikachu', 'Gloom', 'Staryu'], 'Matches Bulbapedia\'s PCNY Evolution Stone Promotion list.'],
    ['Evolution Stones C', ['Pikachu', 'Gloom', 'Staryu'], 'Matches Bulbapedia\'s PCNY Evolution Stone Promotion list.'],
    ['EX Dragon B', ['Altaria', 'Flygon', 'Seadra', 'Salamence'], 'Matches Bulbapedia\'s PCNY EX-Dragon TCG Prerelease list.'],
    ['EX Dragon C', ['Altaria', 'Flygon', 'Seadra', 'Salamence'], 'Matches Bulbapedia\'s PCNY EX-Dragon TCG Prerelease list.'],
    ['Halloween Bash B', ['Level 50 Exploud', 'Level 100 Exploud', 'Level 50 Aggron', 'Level 100 Aggron', 'Level 50 Wailord', 'Level 100 Wailord', 'Level 50 Crawdaunt', 'Level 100 Crawdaunt'], 'Matches Bulbapedia\'s PCNY Halloween Bash Monster list.'],
    ['Halloween Bash C', ['Level 50 Exploud', 'Level 100 Exploud', 'Level 50 Aggron', 'Level 100 Aggron', 'Level 50 Wailord', 'Level 100 Wailord', 'Level 50 Crawdaunt', 'Level 100 Crawdaunt'], 'Matches Bulbapedia\'s PCNY Halloween Bash Monster list.'],
    ['Monster Week B', ['Shedinja', 'Cacturne', 'Shuppet', 'Duskull'], 'Mapped to Bulbapedia\'s PCNY Monster Week 1 list; filename match is inferential.'],
    ['Monster Week C', ['Shedinja', 'Cacturne', 'Shuppet', 'Duskull'], 'Mapped to Bulbapedia\'s PCNY Monster Week 1 list; filename match is inferential.'],
    ['Sheep and Wolf C', ['Houndour', 'Mareep'], 'Mapped to Bulbapedia\'s PCNY Colosseum Tournament Promotion list; filename match is inferential.'],
    ['Sheep and Wolf D', ['Houndour', 'Mareep'], 'Mapped to Bulbapedia\'s PCNY Colosseum Tournament Promotion list; filename match is inferential.'],
    ['Slither and Swim C', ['Zangoose', 'Seviper', 'Milotic', 'Kingdra'], 'Matches Bulbapedia\'s PCNY Slither & Swim Week list.'],
    ['Slither and Swim D', ['Zangoose', 'Seviper', 'Milotic', 'Kingdra'], 'Matches Bulbapedia\'s PCNY Slither & Swim Week list.'],
    ['Spring Campaign C', ['Gardevoir', 'Tropius', 'Salamence'], 'Mapped to Bulbapedia\'s Unknown Spring Pokémon list; filename match is inferential.'],
    ['Spring Campaign D', ['Gardevoir', 'Tropius', 'Salamence'], 'Mapped to Bulbapedia\'s Unknown Spring Pokémon list; filename match is inferential.'],
    ['Trade and Nature C', ['Machamp', 'Ludicolo', 'Shiftry', 'Golem'], 'Mapped to Bulbapedia\'s Campaign 6 Pokémon list; filename match is inferential.'],
    ['Trade and Nature D', ['Machamp', 'Ludicolo', 'Shiftry', 'Golem'], 'Mapped to Bulbapedia\'s Campaign 6 Pokémon list; filename match is inferential.']
  ].map(function(row) {
    return {
      title: row[0],
      language: 'English',
      kind: 'PCNY Campaign Pokémon',
      obtains: row[1],
      targets: ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'],
      details: 'Pokémon Center New York machine campaign ROM. Machine letter variants generally represent station-specific copies of the same themed campaign.',
      notes: row[2],
      source: 'Classic Distribution ROM'
    };
  });

  var classicJapanese = [
    ['5thAnnivPCJP Eggs', 'Egg Distribution', ['Bellsprout', 'Meowth', 'Oddish', 'Poliwag'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], '5th anniversary PCJP egg distribution.', 'Japanese README notes this egg line has special shiny behavior when traded and hatched cross-game, except Pichu odds note in the README.'],
    ['Ageto Celebi', 'Single Pokémon', ['Celebi'], ['Ruby', 'Sapphire'], 'AGETO Celebi distribution recreation.', 'Shiny-locked per Japanese README.'],
    ['ANA Pikachu', 'Single Pokémon', ['Pikachu'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'ANA Pikachu event recreation.', 'Shiny-locked per Japanese README.'],
    ['Berry Fix Glitch Zigzagoon', 'Single Pokémon', ['Zigzagoon'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Japanese berry-fix Zigzagoon.', 'Shiny-locked per Japanese README.'],
    ['Colos Pikachu', 'Single Pokémon', ['Pikachu'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Colosseum-themed Pikachu distribution.', 'Shiny-locked per Japanese README.'],
    ['Festa Metang', 'Single Pokémon', ['Metang'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Festa Metang event recreation.', 'Shiny-locked per Japanese README.'],
    ['GW Pikachu', 'Single Pokémon', ['Pikachu'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Golden Week Pikachu event.', 'Shiny-locked per Japanese README.'],
    ['Hadou Mew', 'Single Pokémon', ['Mew'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Aura/Hadou Mew event recreation.', 'Shiny-locked per Japanese README.'],
    ['Hadou Regice', 'Single Pokémon', ['Regice'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Hadou Regice event recreation.', 'Shiny-locked per Japanese README.'],
    ['Hadou Regirock', 'Single Pokémon', ['Regirock'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Hadou Regirock event recreation.', 'Shiny-locked per Japanese README.'],
    ['Hadou Registeel', 'Single Pokémon', ['Registeel'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Hadou Registeel event recreation.', 'Shiny-locked per Japanese README.'],
    ['Mitsurin Celebi', 'Single Pokémon', ['Celebi'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Mitsurin Celebi event recreation.', 'Shiny-locked per Japanese README.'],
    ['Negaiboshi Jirachi - Restricted', 'Single Pokémon', ['Jirachi'], ['Ruby', 'Sapphire'], 'Restricted version of the Negaiboshi Jirachi ROM.', 'Shiny-locked per Japanese README.'],
    ['Negaiboshi Jirachi - Unrestricted', 'Single Pokémon', ['Jirachi'], ['Ruby', 'Sapphire'], 'Unrestricted version of the Negaiboshi Jirachi ROM.', 'Shiny-locked per Japanese README.'],
    ['PokePark Celebi', 'Single Pokémon', ['Celebi'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'PokéPark Celebi recreation.', 'Shiny-locked per Japanese README.'],
    ['PokePark Eggs', 'Egg Distribution', ['Cacnea', 'Corphish', 'Corsola', 'Igglybuff', 'Minun', 'Pichu', 'Plusle', 'Psyduck', 'Skitty', 'Spinda', 'Spoink', 'Surskit', 'Taillow', 'Whismur', 'Wynaut'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'PokéPark egg pool distribution.', 'Japanese README lists PokéPark Eggs as one of the non-shiny-locked exceptions.'],
    ['PokePark Jirachi - 60731', 'Single Pokémon', ['Jirachi'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'PokéPark Jirachi dated/variant ROM.', 'Shiny-locked per Japanese README.'],
    ['PokePark Jirachi - 60830', 'Single Pokémon', ['Jirachi'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Second PokéPark Jirachi dated/variant ROM.', 'Shiny-locked per Japanese README.'],
    ['PokePark Meowth', 'Single Pokémon', ['Meowth'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'PokéPark Meowth recreation.', 'Shiny-locked per Japanese README.'],
    ['PokePark Mew', 'Single Pokémon', ['Mew'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'PokéPark Mew recreation.', 'Shiny-locked per Japanese README.'],
    ['Pokemon Box Eggs', 'Egg Distribution', ['Pokémon Box egg pool'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Japanese Pokémon Box egg distribution ROM.', 'Japanese README lists Pokémon Box Eggs as not shiny-locked.'],
    ['Sapporo Pikachu', 'Single Pokémon', ['Pikachu'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Sapporo store/event Pikachu.', 'Shiny-locked per Japanese README.'],
    ['STAMP Absol', 'Single Pokémon', ['Absol'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'STAMP Absol event recreation.', 'Shiny-locked per Japanese README.'],
    ['STAMP Pichu', 'Single Pokémon', ['Pichu'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'STAMP Pichu event recreation.', 'Shiny-locked per Japanese README.'],
    ['Sunday Wobbuffet', 'Single Pokémon', ['Wobbuffet'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Sunday Wobbuffet event recreation.', 'Shiny-locked per Japanese README.'],
    ['Tanabata 2004 Jirachi', 'Single Pokémon', ['Jirachi'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], '2004 Tanabata Jirachi.', 'Shiny-locked per Japanese README.'],
    ['Tanabata 2005 Jirachi', 'Single Pokémon', ['Jirachi'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], '2005 Tanabata Jirachi.', 'Shiny-locked per Japanese README.'],
    ['Tanabata 2006 Jirachi', 'Single Pokémon', ['Jirachi'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], '2006 Tanabata Jirachi.', 'Shiny-locked per Japanese README.'],
    ['Yokohama Pikachu', 'Single Pokémon', ['Pikachu'], ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'], 'Yokohama Pikachu event recreation.', 'Shiny-locked per Japanese README.']
  ].map(function(row) {
    return { title: row[0], language: 'Japanese', kind: row[1], obtains: row[2], targets: row[3], details: row[4], notes: row[5], source: 'Classic Distribution ROM' };
  });

  var gatheringMore = [
    [1, ['Treecko', 'Torchic', 'Mudkip']],
    [2, ['Chikorita', 'Cyndaquil', 'Totodile']],
    [3, ['Ekans', 'Pikachu', 'Meowth', 'Growlithe', 'Bellsprout', 'Slowpoke', 'Shellder', 'Chansey', 'Kangaskhan', 'Scyther', 'Electabuzz', 'Magmar', 'Tauros', 'Murkrow', 'Misdreavus', 'Qwilfish', 'Sneasel', 'Delibird', 'Mantine']],
    [4, ['Bulbasaur', 'Charmander', 'Squirtle']],
    [5, ['Pikachu', 'Lotad', 'Seedot', 'Surskit', 'Skitty', 'Sableye', 'Mawile', 'Meditite', 'Plusle', 'Minun', 'Roselia', 'Zangoose', 'Seviper', 'Lunatone', 'Solrock', 'Chimecho']],
    [6, ['Pikachu', 'Hoothoot', 'Mareep', 'Aipom', 'Sunkern', 'Wobbuffet', 'Pineco', 'Gligar', 'Snubbull', 'Shuckle', 'Teddiursa', 'Houndour', 'Stantler', 'Smeargle']]
  ].map(function(row) {
    return {
      title: 'Gathering More Campaign ' + row[0],
      language: 'Japanese',
      kind: 'Campaign Pokémon',
      obtains: row[1],
      targets: ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen'],
      details: 'Japanese Gather More Pokémon! Campaign distribution ROM from the dedicated repo folder.',
      notes: 'Species list comes from Bulbapedia\'s Gather More campaign article for Campaign ' + row[0] + '.',
      source: 'Classic Distribution ROM'
    };
  });

  return projectWonder.concat(classicEnglish, pcnyCampaigns, classicJapanese, gatheringMore);
};

function buildDistributionsPage() {
  var root = document.getElementById('distributions-content');
  if (!root) return;

  var allEntries = window.getDistributionEntries();

  var state = { source: 'all', language: 'all', query: '' };

  function norm(s) {
    return String(s || '').toLowerCase();
  }

  function matches(entry) {
    var q = norm(state.query);
    var selectedGame = typeof GAME !== 'undefined' ? GAME : 'all';
    if (state.source !== 'all' && norm(entry.source) !== state.source) return false;
    if (state.language !== 'all') {
      var lang = norm(entry.language);
      if (lang !== state.language && lang !== 'multi-language') return false;
    }
    if (selectedGame && selectedGame !== 'all') {
      var compatible = (entry.targets || []).some(function(target) {
        var t = norm(target);
        if (selectedGame === 'FR') return t.indexOf('firered') !== -1 || t === 'fr';
        if (selectedGame === 'LG') return t.indexOf('leafgreen') !== -1 || t === 'lg';
        if (selectedGame === 'R') return t.indexOf('ruby') !== -1 || t === 'r';
        if (selectedGame === 'S') return t.indexOf('sapphire') !== -1 || t === 's';
        if (selectedGame === 'E') return t.indexOf('emerald') !== -1 || t === 'e';
        return true;
      });
      if (!compatible) return false;
    }
    if (!q) return true;
    var hay = [
      entry.title,
      entry.language,
      entry.kind,
      entry.source,
      (entry.obtains || []).join(' '),
      (entry.targets || []).join(' '),
      entry.details,
      entry.notes
    ].join(' ').toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  function pill(text, color, bg) {
    return '<span style="display:inline-block;padding:4px 8px;border-radius:999px;font-size:10px;border:1px solid ' + (color || 'var(--border)') + ';color:' + (color || 'var(--text)') + ';background:' + (bg || 'transparent') + ';">' + text + '</span>';
  }

  function shinyPill(entry) {
    if (entry.source === 'Project Wonder' && entry.kind.indexOf('Egg') === -1) {
      return '';
    }
    if (entry.kind.indexOf('Item') !== -1 && entry.kind.indexOf('Egg') === -1 && entry.kind.indexOf('Pokémon') === -1) {
      return '';
    }
    var note = norm(entry.notes);
    if (note.indexOf('not shiny-locked') !== -1 || note.indexOf('can be shiny') !== -1) {
      return pill('Shiny Possible', '#7fe39c', 'rgba(127,227,156,0.10)');
    }
    if (note.indexOf('shiny-locked') !== -1) {
      return pill('Shiny Locked', '#ff8f8f', 'rgba(255,143,143,0.10)');
    }
    return pill('Shiny Unknown', '#b8c1d1', 'rgba(184,193,209,0.08)');
  }

  function sectionSummary(label, value, accent) {
    return '<div style="background:var(--card);border:1px solid var(--border);border-radius:8px;padding:14px 16px;">'
      + '<div style="font-family:\'Press Start 2P\',monospace;font-size:7px;color:' + accent + ';letter-spacing:1px;margin-bottom:8px;">' + label + '</div>'
      + '<div style="font-size:18px;color:var(--text);font-weight:700;">' + value + '</div>'
      + '</div>';
  }

  function renderEntry(entry) {
    return '<div style="background:var(--panel);border:1px solid var(--border);border-radius:10px;padding:16px;">'
      + '<div style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start;flex-wrap:wrap;margin-bottom:10px;">'
      + '<div>'
      + '<div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:4px;">' + entry.title + '</div>'
      + '<div style="display:flex;gap:6px;flex-wrap:wrap;">'
      + pill(entry.source === 'Project Wonder' ? 'Patch-based' : 'Classic ROM', entry.source === 'Project Wonder' ? '#64b4ff' : '#ffd166', entry.source === 'Project Wonder' ? 'rgba(100,180,255,0.1)' : 'rgba(255,209,102,0.08)')
      + pill(entry.language, '#9ad27a', 'rgba(154,210,122,0.08)')
      + pill(entry.kind, '#c7a6ff', 'rgba(199,166,255,0.08)')
      + (shinyPill(entry) || '')
      + '</div>'
      + '</div>'
      + '</div>'
      + '<div style="font-size:11px;color:var(--muted);line-height:1.8;margin-bottom:10px;">' + entry.details + '</div>'
      + '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;">'
      + '<div style="background:var(--card);border:1px solid var(--border);border-radius:8px;padding:12px;">'
      + '<div style="font-family:\'Press Start 2P\',monospace;font-size:6px;color:var(--gold);letter-spacing:1px;margin-bottom:8px;">OBTAINABLE</div>'
      + '<div style="font-size:11px;color:var(--text);line-height:1.8;">' + entry.obtains.join(', ') + '</div>'
      + '</div>'
      + '<div style="background:var(--card);border:1px solid var(--border);border-radius:8px;padding:12px;">'
      + '<div style="font-family:\'Press Start 2P\',monospace;font-size:6px;color:var(--gold);letter-spacing:1px;margin-bottom:8px;">TARGET GAMES</div>'
      + '<div style="font-size:11px;color:var(--text);line-height:1.8;">' + entry.targets.join(', ') + '</div>'
      + '</div>'
      + (entry.mechanics && entry.mechanics.length ? '<div style="background:var(--card);border:1px solid var(--border);border-radius:8px;padding:12px;">'
      + '<div style="font-family:\'Press Start 2P\',monospace;font-size:6px;color:var(--gold);letter-spacing:1px;margin-bottom:8px;">TECHNICAL DETAILS</div>'
      + '<div style="font-size:11px;color:var(--text);line-height:1.8;">' + entry.mechanics.join('<br>') + '</div>'
      + '</div>' : '')
      + '</div>'
      + (entry.notes ? '<div style="margin-top:10px;padding:10px 12px;border-radius:8px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.05);font-size:11px;color:var(--muted);line-height:1.8;"><strong style="color:var(--text)">Notes:</strong> ' + entry.notes + '</div>' : '')
      + '</div>';
  }

  function render() {
    var entries = allEntries.filter(matches);
    var classicCount = allEntries.filter(function(entry) { return entry.source === 'Classic Distribution ROM'; }).length;
    var wonderCount = allEntries.filter(function(entry) { return entry.source === 'Project Wonder'; }).length;
    var selectedGame = typeof GAME !== 'undefined' ? GAME : 'all';
    var selectedGameLabel = selectedGame === 'all' ? 'All games' : ({FR:'FireRed',LG:'LeafGreen',R:'Ruby',S:'Sapphire',E:'Emerald'}[selectedGame] || selectedGame);
    var activeEl = document.activeElement;
    var restoreSearchFocus = activeEl && activeEl.id === 'dist-search';
    var searchSelStart = restoreSearchFocus && typeof activeEl.selectionStart === 'number' ? activeEl.selectionStart : null;
    var searchSelEnd = restoreSearchFocus && typeof activeEl.selectionEnd === 'number' ? activeEl.selectionEnd : null;

    root.innerHTML = ''
      + '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:18px;">'
      + sectionSummary('TOTAL ENTRIES', allEntries.length, 'var(--gold)')
      + sectionSummary('CLASSIC ROMS', classicCount, '#ffd166')
      + sectionSummary('PROJECT WONDER PATCHES', wonderCount, '#64b4ff')
      + sectionSummary('EGG / RANDOM POOLS', allEntries.filter(function(entry) { return entry.kind.indexOf('Egg') !== -1; }).length, '#9ad27a')
      + '</div>'
      + '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px;margin-bottom:18px;">'
      + '<div style="background:var(--card);border:1px solid var(--border);border-radius:8px;padding:14px 16px;font-size:11px;color:var(--muted);line-height:1.8;"><strong style="color:var(--text)">Classic repo:</strong> Link-cable multiboot Pokémon distributions, split mostly into English and Japanese event recreations. The English README says all are shiny-locked except Wishmkr Jirachi, Channel Jirachi, and Pokémon Box Eggs; the Japanese README exempts Pokémon Box Eggs, PokéPark Eggs, and 5thAnnivPCJP eggs from the blanket shiny-lock rule.</div>'
      + '<div style="background:var(--card);border:1px solid var(--border);border-radius:8px;padding:14px 16px;font-size:11px;color:var(--muted);line-height:1.8;"><strong style="color:var(--text)">Project Wonder repo:</strong> Wireless-adapter patch set built from the preserved Aurora Ticket distribution ROM. The README explicitly supports English, French, German, Italian, Japanese, and Spanish, with Emerald-only limits for Eon Ticket, Old Sea Map, and Decoration Set.</div>'
      + '</div>'
      + '<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:16px;">'
      + '<div style="position:relative;display:flex;align-items:center;flex:1;min-width:240px;">'
      + '<input id="dist-search" type="text" placeholder="Search ROM, patch, Pokémon, item, or note…" style="flex:1;padding-right:28px;padding:8px 12px;background:var(--card);border:1px solid var(--border);border-radius:6px;color:var(--text);font-size:12px;outline:none;">'
      + '<button id="dist-search-clear" class="search-bar-clear" title="Clear search" style="display:none;" type="button">✕</button>'
      + '</div>'
      + '<div id="dist-source-filter" style="display:flex;gap:6px;flex-wrap:wrap;"></div>'
      + '<div id="dist-language-filter" style="display:flex;gap:6px;flex-wrap:wrap;"></div>'
      + '</div>'
      + '<div style="display:flex;justify-content:space-between;gap:12px;align-items:center;margin-bottom:12px;flex-wrap:wrap;">'
      + '<div style="font-size:11px;color:var(--muted);">Showing <strong style="color:var(--text)">' + entries.length + '</strong> entries.</div>'
      + '<div style="font-size:11px;color:var(--muted);">Sources: <a href="https://github.com/Goppier/GEN3PokemonDistributions" target="_blank" rel="noopener" style="color:var(--gold);text-decoration:none;">GEN3PokemonDistributions</a> and <a href="https://github.com/Goppier/Gen3DistributionRoms" target="_blank" rel="noopener" style="color:var(--gold);text-decoration:none;">Gen3DistributionRoms</a></div>'
      + '</div>'
      + '<div id="dist-list" style="display:flex;flex-direction:column;gap:12px;"></div>';

    var sourceFilter = document.getElementById('dist-source-filter');
    var languageFilter = document.getElementById('dist-language-filter');
    var search = document.getElementById('dist-search');
    var clearBtn = document.getElementById('dist-search-clear');
    if (search) {
      search.value = state.query;
      search.oninput = function() {
        state.query = this.value || '';
        render();
      };
      if (clearBtn) {
        clearBtn.style.display = state.query ? 'flex' : 'none';
        clearBtn.onclick = function() {
          state.query = '';
          render();
        };
      }
      if (restoreSearchFocus) {
        search.focus();
        if (searchSelStart !== null && searchSelEnd !== null) {
          try { search.setSelectionRange(searchSelStart, searchSelEnd); } catch (e) {}
        }
      }
    }

    [
      { key: 'all', label: 'All Sources' },
      { key: 'classic distribution rom', label: 'Classic ROMs' },
      { key: 'project wonder', label: 'Project Wonder' }
    ].forEach(function(opt) {
      var active = state.source === opt.key;
      var btn = document.createElement('button');
      btn.textContent = opt.label;
      btn.style.cssText = 'font-size:10px;padding:6px 10px;border:1px solid var(--border);border-radius:999px;cursor:pointer;background:' + (active ? 'var(--gold)' : 'var(--card)') + ';color:' + (active ? '#000' : 'var(--text)') + ';';
      btn.onclick = function() {
        state.source = opt.key;
        render();
      };
      sourceFilter.appendChild(btn);
    });

    [
      { key: 'all', label: 'All Languages' },
      { key: 'english', label: 'English' },
      { key: 'japanese', label: 'Japanese' }
    ].forEach(function(opt) {
      var active = state.language === opt.key;
      var btn = document.createElement('button');
      btn.textContent = opt.label;
      btn.style.cssText = 'font-size:10px;padding:6px 10px;border:1px solid var(--border);border-radius:999px;cursor:pointer;background:' + (active ? '#64b4ff' : 'var(--card)') + ';color:' + (active ? '#000' : 'var(--text)') + ';';
      btn.onclick = function() {
        state.language = opt.key;
        render();
      };
      languageFilter.appendChild(btn);
    });

    var list = document.getElementById('dist-list');
    list.innerHTML = entries.map(renderEntry).join('');
  }

  render();
}
