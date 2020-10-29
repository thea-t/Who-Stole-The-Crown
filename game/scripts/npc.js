//create class in order to initialize npc's properties
class NPC {
    constructor(name, imageSource, positionX, positionY, worksForKing, isPoorVillager, hasHat, hasArmor, wearsGreen, hasCuts, isPirate, wearsBlack, hasSword, hasShield, hasHorse) {
        this.npcName = name;
        this.npcImageSource = imageSource;
        this.npcPositionX = positionX;
        this.npcPositionY = positionY;
        this.npcWorksForKing = worksForKing;
        this.npcIsPoorVillager = isPoorVillager;
        this.npcHasHat = hasHat;
        this.npcHasArmor = hasArmor;
        this.npcWearsGreen = wearsGreen;
        this.npcHasCuts = hasCuts;
        this.npcIsPirate = isPirate;
        this.npcWearsBlack = wearsBlack;
        this.npcHasSword = hasSword;
        this.npcHasShield = hasShield;
        this.npcHasHorse = hasHorse;

    }
}
//store king's data 
var king = new NPC("King", "art/TheKing.png", 300, 400);

//crete an array and store npc's data 
var npcs = new Array();
npcs[0] = new NPC("Sparrow", "art/Sparrow.png", 700, 320, false, false, true, false, false, false, true, true, true, false, false);
npcs[1] = new NPC("Robin", "art/Robin.png", 220, 370, false, false, true, false, true, false, false, false, false, false, false);
npcs[2] = new NPC("Dark Knight", "art/DarkKnight.png", 500, 410, false, false, false, true, false, false, false, true, false, true, true);
npcs[3] = new NPC("Jester", "art/Jester.png", 500, 300, true, false, false, false, true, false, false, false, false, false, false);
npcs[4] = new NPC("Chef", "art/Chef.png", 700, 350, true, false, true, false, false, false, false, false, false, false, false);
npcs[5] = new NPC("Sir Henry", "art/SirHenry.png", 600, 300, true, false, false, true, false, false, false, false, false, true, true);
npcs[6] = new NPC("Sir Arthur", "art/SirArthur.png", 200, 300, true, false, false, true, false, false, false, false, true, true, false);
npcs[7] = new NPC("Sir Brom", "art/SirBrom.png", 600, 400, true, false, false, true, false, false, false, false, true, false, false);
npcs[8] = new NPC("Sivis", "art/Sivis.png", 650, 330, false, true, false, false, false, true, false, false, false, false, false);
npcs[9] = new NPC("Resse", "art/Resse.png", 150, 350, false, true, false, false, true, true, false, false, false, false, false);
npcs[10] = new NPC("Hoel", "art/Hoel.png", 700, 350, false, true, false, false, false, false, false, false, false, false, false);
npcs[11] = new NPC("Barry", "art/Barry.png", 400, 400, false, true, true, false, false, false, false, false, false, false, false);
npcs[12] = new NPC("Two Toes", "art/TwoToes.png", 300, 400, false, false, true, false, true, false, true, false, false, false, false);
npcs[13] = new NPC("Black Bart", "art/BlackBart.png", 600, 370, false, false, true, false, false, false, true, true, false, false, false);
npcs[14] = new NPC("Zorro", "art/Zorro.png", 200, 300, false, false, true, false, false, false, false, true, false, false, true);
npcs[15] = new NPC("Donald", "art/Donald.png", 200, 350, false, true, true, false, true, false, false, false, false, false, false);