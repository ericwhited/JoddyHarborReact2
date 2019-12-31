const jobs = [
  {
    name: "Knight"
  },
  {
    id: 1,
    name: "Berserker",
    subclass: "Warrior",
    weapons: "2H Sword",
    properties: "Physical",
    stats: "STR, HP, Physical Damage",
    skills: [
      {
        name: "Dark Aura",
        level_requirements: "16",
        skill_requirements: "None",
        type: "Passive",
        additional_types: "Dark",
        weapon_requirements: "None",
        cooldown: "none",
        skill_photo: "images/zerker/DarkAura.png",
        description:
          "Your latent dark power restores 10 spirit every second. Dark Aura stacks on hit, up to once per second, up to 10 times total. Each stack increases the amount restored by an additional 1 spirit."
      },
      {
        name: "X Slash",
        level_requirements: "24",
        skill_requirements: "None",
        type: "Active",
        additional_types: "Close Range, Physical",
        weapon_requirements: "Two-handed Greatsword",
        cooldown: "none",
        skill_photo: "images/zerker/xSlash.png",
        description:
          "Swing your greatsword in an X as you charge forward 4.5 m, dealing 75% damage 2 times to 5 enemies in your path. This skill can cancel other skills. You will be immune to knockback while this skill is active. Consumes 40 stamina."
      }
    ]
  },
  {
    name: "Wizard",
    weapons: "Staff",
    properties: "Fire, Frost, Lightning",
    stats: "INT, Magic Attack"
  },
  {
    name: "Priest",
    weapons: "Scepter, Codex",
    properties: "Holy",
    stats: "INT, Healing"
  },
  {
    name: "Heavy Gunner",
    weapons: "Cannon",
    properties: "Physical, Fire, Lightning",
    stats: "DEX, Physical Damage"
  },
  {
    name: "Archer",
    weapons: "Bow",
    properties: "Physical, Fire, Ice",
    stats: "Dex, Attack Speed, Critical Hit"
  },
  {
    name: "Assassin",
    weapons: "One-handed Thrown Weapons",
    properties: "Physical, Shadow",
    stats: "LUK, Critical Damage"
  },
  {
    name: "Thief",
    weapons: "One-handed Daggers",
    properties: "Physical, Toxic",
    stats: "LUK, Movement Speed, Evasion"
  },
  {
    name: "Runeblader",
    weapons: "2H Blade",
    properties: "Fire, Frost, Lightning",
    stats: "STR, INT"
  },
  {
    name: "Soul Binder",
    weapons: "2H Orb",
    properties: "None",
    stats: "INT, Magic Attack"
  },
  {
    name: "Striker"
  }
];

export default jobs;
