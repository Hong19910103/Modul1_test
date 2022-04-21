class BookManager{
    constructor(number,name,year,quality,feeling) {
        this.numberbook= number;
        this.namebook= name;
        this.makeyear=year;
        this.quality=quality;
        this.feeling=feeling;
    }
    getTable(){
        let html="";
        for (let i = 0; i < this.numberbook; i++) {
            html+=`<tr>`;
            html+=`<td>${this.numberbook[i]}<td>`;
            html+=`<td>${this.namebook[i]}<td>`;
            html+=`<td>${this.makeyear[i]}<td>`;
            html+=`<td>${this.quality[i]}<td>`;
            html+=`<td>${this.feeling[i]}<td>`;
            html+=`</tr>`;

        }
    }

}