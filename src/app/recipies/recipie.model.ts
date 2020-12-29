export class Recipie {
    public name: string;
    public description: string;
    public itemImage: string;
    constructor(name: string, desc: string, img: string) {
        this.name = name;
        this.description = desc;
        this.itemImage = img;
    }
}
