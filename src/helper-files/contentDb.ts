import { Content } from "./content-interface";

let contentListArr:Content[] = [];

const generateContent = (id:number,contentArr:(string)[])=>{
    return {
      id,
      title:contentArr[0],
      description:contentArr[1],
      creator:contentArr[2]
    }
}
export const contentList = {
    generateContent: ():Content[]=>{
        contentListArr.push({
            ...generateContent(
              1,['Virat Kohli','Run Machine Kohli','India']
            ),
            ...{imgURL:'https://www.thestatesman.com/wp-content/uploads/2019/07/Virat-Kohli.jpg'},
            ...{type:'Bating'},
            ...{tags:['Batting']}
        });
        contentListArr.push({
            ...generateContent(
              2,['Liton Das',`He is a one of the best batsman for bangladesh`,'Bangladesh']
            ),
            ...{type:'Bowling'},
            ...{imgURL:'https://staticg.sportskeeda.com/editor/2020/03/797c3-15830758836732-800.jpg'}
        });
        contentListArr.push({
            ...generateContent(
              3,['Kevin peterson','highest number of run for england,England']
            ),
            ...{type:'Fielding'},
            ...{imgURL:'https://images1.livehindustan.com/uploadimage/library/2019/06/27/16_9/16_9_1/kevin_peterson_1561644444.jpg'}
        });
          contentListArr.push({
            ...generateContent(
              4,['Gayle',' GayleStrome coming','West Indies']
            ),
            ...{type:'Bowling'},
            ...{imgURL:'https://img.cricketworld.com/images/f-065002/2017-09-24t143327z_1779417312_rc1ad5a14c20_rtrmadp_3_cricket-odi-eng-win.jpg'},
            ...{tags:['Spiner']}
          });
          contentListArr.push({
            ...generateContent(
              5,['Warner','Makes cool advertisment','Australia']
            )
          });
          contentListArr.push({
            ...generateContent(
              6,['ABD','Mr. 360','Africa']
            )
          });
          contentListArr.push({
            ...generateContent(
              7,['Afridi','Bouncer','Pakistan']
            )
          });
          contentListArr.push({
            ...generateContent(
              8,['Dhoni','Best finisher','India']
            )
          });
      return contentListArr;
    },
    contentListArr
}