const pptxgen=require("pptxgenjs"); const p=new pptxgen();
p.defineLayout({name:"W",width:13.33,height:7.5}); p.layout="W";
p.author="데이터분석팀"; p.title="서울 지하철 혼잡·사고 정책 제언";
const C="/Users/yoon/Documents/데이터분석/charts/";
const VID="/Users/yoon/Documents/데이터분석/영상/뉴스몽타주.mp4";
const NAVY="112E51", STEEL="205493", INK="1E2124", GRAYD="6D7882", GRAYL="C7CDD4", BG="F4F5F6", WHITE="FFFFFF", RED="C0392B";
const F="맑은 고딕";
const sh=()=>({type:"outer",color:"AAB2BD",blur:7,offset:2,angle:90,opacity:0.22});
const TABS=["문제","분석","대안","실행"]; let PG=1;
function tab(s,a){let x=9.0; TABS.forEach((t,i)=>{const w=1.0,y=0.33,h=0.34;
  if(i===a){s.addShape(p.shapes.ROUNDED_RECTANGLE,{x,y,w,h,fill:{color:NAVY},rectRadius:0.04}); s.addText(t,{x,y,w,h,fontSize:10.5,bold:true,color:WHITE,align:"center",valign:"middle",fontFace:F,margin:0});}
  else s.addText(t,{x,y,w,h,fontSize:10.5,color:"AEB6C0",align:"center",valign:"middle",fontFace:F,margin:0}); x+=w+0.04;});}
function kick(s,t){s.addText(t,{x:0.6,y:0.34,w:8,h:0.3,fontSize:11.5,bold:true,color:STEEL,fontFace:F,margin:0,charSpacing:1});}
function head(s,t){s.addText(t,{x:0.6,y:0.74,w:12.1,h:0.95,fontSize:21,bold:true,color:NAVY,fontFace:F,margin:0,valign:"top",lineSpacingMultiple:1.05});}
function ftr(s,srcTxt){ if(srcTxt)s.addText("자료: "+srcTxt,{x:0.6,y:6.96,w:9.5,h:0.3,fontSize:8.5,color:GRAYD,fontFace:F,margin:0});
  s.addText("서울 지하철 혼잡·사고 정책 제언",{x:0.6,y:7.18,w:9,h:0.25,fontSize:8,color:GRAYL,fontFace:F,margin:0});
  s.addText(String(PG),{x:12.4,y:7.06,w:0.5,h:0.3,fontSize:9,color:GRAYD,align:"right",fontFace:F,margin:0}); PG++;}
function img(s,f,x,y,w,h){s.addImage({path:C+f,x,y,w,h,sizing:{type:"contain",w,h}});}
function card(s,x,y,w,h,fill){s.addShape(p.shapes.ROUNDED_RECTANGLE,{x,y,w,h,fill:{color:fill||WHITE},line:{color:GRAYL,width:1},rectRadius:0.06,shadow:sh()});}
function stat(s,x,y,w,num,label,clr){card(s,x,y,w,1.5);
  s.addText(num,{x,y:y+0.16,w,h:0.66,fontSize:25,bold:true,color:clr||NAVY,align:"center",fontFace:F,margin:0});
  s.addText(label,{x:x+0.07,y:y+0.88,w:w-0.14,h:0.55,fontSize:10.5,color:GRAYD,align:"center",fontFace:F,margin:0,valign:"top",lineSpacingMultiple:1.05});}
function key(s,txt){s.addShape(p.shapes.ROUNDED_RECTANGLE,{x:0.6,y:6.15,w:12.13,h:0.66,fill:{color:NAVY},rectRadius:0.05});
  s.addText([{text:"핵심  ",options:{bold:true,color:"9DB2CC"}},{text:txt,options:{bold:true,color:WHITE}}],{x:0.95,y:6.15,w:11.4,h:0.66,fontSize:13,valign:"middle",fontFace:F,margin:0});}

// 1 표지
let s=p.addSlide(); s.background={color:NAVY};
s.addText("정책 제언 보고서",{x:0.9,y:1.55,w:11,h:0.4,fontSize:13,bold:true,color:"7FA8D0",fontFace:F,charSpacing:3});
s.addText("출퇴근, 혼잡도 사고도 한 곳에 몰린다",{x:0.9,y:2.05,w:11.5,h:1.5,fontSize:38,bold:true,color:WHITE,fontFace:F,lineSpacingMultiple:1.08});
s.addText("서울 지하철 혼잡·사고 데이터 분석과 정책 제언",{x:0.9,y:3.95,w:11.5,h:0.5,fontSize:17,color:"CADCFC",fontFace:F});
s.addShape(p.shapes.LINE,{x:0.92,y:4.65,w:3.2,h:0,line:{color:"3A5575",width:1.5}});
s.addText("서울 1~9호선 · 2015–2026 · 대상: 서울교통공사 · 국회 국토교통위원회",{x:0.9,y:4.85,w:11.5,h:0.4,fontSize:12.5,color:"8FA4BC",fontFace:F});
s.addText("데이터분석팀 · 2026.6",{x:0.9,y:6.5,w:6,h:0.35,fontSize:11,color:"6F86A0",fontFace:F});

// 2 Executive Summary (결론 먼저)
s=p.addSlide(); s.background={color:WHITE}; tab(s,0); kick(s,"요약 · EXECUTIVE SUMMARY");
head(s,"한 장 요약 — 무엇이 문제이고, 무엇을 해야 하는가");
const es=[["상황","코로나 후 수요 91% 회복 → 출퇴근 혼잡 재심화"],
["문제","혼잡한 노선·시간대에 사고가 겹치면 폭증 → 안전 위협 (반복 발생)"],
["분석","혼잡·사고 모두 2호선·도심·출퇴근 집중 (상위10% 역 28.5% · 출근 사고율 2.65배 · η²=.28)"],
["제언","취약 지점 우선 투자 + 사고·수요 대응 — 서울교통공사·국회 투트랙"]];
es.forEach((e,i)=>{const y=1.95+i*1.05; card(s,0.6,y,12.13,0.92,i===3?BG:WHITE);
  s.addText(e[0],{x:0.8,y,w:1.7,h:0.92,fontSize:14,bold:true,color:i===3?RED:STEEL,valign:"middle",fontFace:F,margin:0});
  s.addShape(p.shapes.LINE,{x:2.45,y:y+0.18,w:0,h:0.56,line:{color:GRAYL,width:1}});
  s.addText(e[1],{x:2.7,y,w:9.8,h:0.92,fontSize:14.5,color:INK,valign:"middle",fontFace:F,margin:0,bold:i===3});});
ftr(s);

// 3 문제정의 SCQA
s=p.addSlide(); s.background={color:WHITE}; tab(s,0); kick(s,"문제 정의 · 바바라 민토 SCQA");
head(s,"평소 혼잡한 곳에 사고가 겹치면 '안전 위협'이 된다");
[["S","상황","코로나로 급감한 수요가 2024년 2019년의 91%까지 회복 → 출퇴근 혼잡 재심화",STEEL],
["C","문제","이미 혼잡한 노선·시간대에 사고·급정차가 겹치면 혼잡 폭증 → 안전 위험",RED],
["Q","질문","어느 노선·역·시간대가 '사고 시 가장 위험한 취약 지점'인가?",NAVY],
["A","답","2호선·도심·출퇴근 집중 → 취약 지점 우선 투자 + 사고·수요 대응",NAVY]].forEach((b,i)=>{
  const x=0.6+i*3.06,y=1.95,w=2.9,h=3.95; card(s,x,y,w,h);
  s.addShape(p.shapes.OVAL,{x:x+0.3,y:y+0.3,w:0.72,h:0.72,fill:{color:b[3]}});
  s.addText(b[0],{x:x+0.3,y:y+0.35,w:0.72,h:0.62,fontSize:27,bold:true,color:WHITE,align:"center",fontFace:F,margin:0});
  s.addText(b[1],{x:x+0.3,y:y+1.2,w:w-0.6,h:0.4,fontSize:15,bold:true,color:b[3],fontFace:F,margin:0});
  s.addText(b[2],{x:x+0.3,y:y+1.62,w:w-0.6,h:2.2,fontSize:12.5,color:INK,fontFace:F,margin:0,valign:"top",lineSpacingMultiple:1.12});});
ftr(s);

// 4 뉴스 영상 (유튜브 임베드)
s=p.addSlide(); s.background={color:WHITE}; tab(s,0); kick(s,"문제 · 반복되는 현실");
head(s,"이건 하루 이틀의 일이 아니다 — 언론이 반복 보도하는 '출근길 위험'");
s.addMedia({type:"online", link:"https://www.youtube.com/embed/x-IJ8ivb4ro", x:3.37, y:1.8, w:6.58, h:3.7});
s.addText("▶ SBS 뉴스 「목숨 건 출근길…여전한 김포 지옥철」 (발표 시 재생 · 인터넷 연결 필요)",{x:3.0,y:5.6,w:7.33,h:0.3,fontSize:10,italic:true,color:GRAYD,align:"center",fontFace:F,margin:0});
key(s,"\"목숨 건 출근길\" — 압사 위험이 해마다 반복 보도되는 구조적 문제");
ftr(s,"SBS 뉴스(YouTube 임베드) · 발표 시 스트리밍");

// 4-2 실제 현장 영상 (팀원 직접 촬영)
s=p.addSlide(); s.background={color:WHITE}; tab(s,0); kick(s,"문제 · 실제 현장");
head(s,"그날 출근길, 실제 현장 — 멈춰선 열차·빼곡한 승강장");
s.addMedia({type:"video", path:"/Users/yoon/Documents/데이터분석/영상/현장영상.mp4", x:3.37, y:1.8, w:6.58, h:3.7});
s.addText("▶ 팀원 직접 촬영 · 2025.7.4 오전 8시 2호선 서울대입구역 (신호장애 당일)",{x:3.0,y:5.6,w:7.33,h:0.3,fontSize:10,italic:true,color:GRAYD,align:"center",fontFace:F,margin:0});
key(s,"뉴스 속 그 사고, 우리 팀원이 그 자리에 있었다 — 데이터 너머의 현실");
ftr(s,"팀원 직접 촬영(2025.7.4 서울대입구역)");

// 5 안전위험 데이터
s=p.addSlide(); s.background={color:WHITE}; tab(s,0); kick(s,"문제의 심각성 · 안전");
head(s,"출근길 혼잡은 이미 '압사 위험' 수준이다");
stat(s,0.6,2.1,3.9,"6.6명/㎡","구로역 혼잡도 252%\n= 이태원 참사 밀집도 수준",RED);
stat(s,4.72,2.1,3.9,"200%+","김포골드라인 출근 혼잡\n(수년째 개선 안 됨)",RED);
stat(s,8.84,2.1,3.9,"170%↑","이동 불가·얼굴 밀착\n(150%면 어깨 부딪침)",NAVY);
card(s,0.6,3.95,12.13,1.85,BG);
s.addText("실제 출근길 사고 (한 달 새 반복)",{x:0.9,y:4.1,w:11,h:0.4,fontSize:13.5,bold:true,color:NAVY,fontFace:F,margin:0});
s.addText([{text:"2025.7.4  2호선 서울대입구역 신호장애 → 약 4시간 운행 차질",options:{bullet:true,breakLine:true}},
{text:"2025.8.4  4호선 평촌역 전기 장애 → 350명 환승, 7개 열차 지연",options:{bullet:true}}],
{x:0.95,y:4.52,w:11.4,h:1.2,fontSize:13,color:INK,fontFace:F,valign:"top",paraSpaceAfter:5});
key(s,"가장 혼잡한 노선·출근 피크에 사고 발생 → 평시 혼잡 = 사고 취약성");
ftr(s,"경향·아시아경제 보도; 서울교통공사");

// 6~11 근거 1~6
function evid(e){let s=p.addSlide(); s.background={color:WHITE}; tab(s,1); kick(s,e.k); head(s,e.h);
  img(s,e.img,0.55,1.9,7.55,4.15);
  e.cards.forEach((c,i)=>stat(s,8.55+i*2.34,1.95,2.14,c[0],c[1],c[2]));
  s.addText(e.bul.map(t=>({text:t,options:{bullet:true,breakLine:true}})),{x:8.55,y:3.6,w:4.45,h:2.3,fontSize:12,color:INK,fontFace:F,valign:"top",paraSpaceAfter:6});
  key(s,e.key); ftr(s,e.src);}
evid({k:"근거 01 · 이용객 추이",h:"코로나로 –27% 급감 후 빠르게 재혼잡 (2024년 91% 회복)",img:"근거1_연도추이.png",
  cards:[["–27.4%","2020 코로나",RED],["91%","2024 회복",NAVY]],bul:["수요가 다시 출퇴근에 집중","평시 부하↑ → 사고 시 위험↑"],key:"회복된 수요 = 혼잡·사고 리스크 재상승",src:"서울 열린데이터광장(2026)"});
evid({k:"근거 02 · 호선별 비교",h:"혼잡은 2호선에 집중 — 유의할 뿐 아니라 효과도 크다",img:"근거2_호선Top8.png",
  cards:[["η²=0.28","大 효과(28% 설명)",RED],["2호선>6","Tukey 사후검정",NAVY]],bul:["ANOVA F=14.8, p<.001 (Welch 보정 후도 유의)","2호선이 8개 중 6개 호선보다 유의하게 많음","→ 2호선 우선 투자 근거"],key:"통계적 유의 + 실질 효과(η²=.28) 모두 충족",src:"서울 열린데이터광장(2026); 팀 분석(ANOVA·Tukey)"});
evid({k:"근거 03 · 시간대 패턴",h:"출근 08시·퇴근 18시 — 뾰족한 출퇴근 쌍봉 피크",img:"근거3_시간대.png",
  cards:[["08시","출근 하차피크",NAVY],["18시","퇴근 승차피크",STEEL]],bul:["유입형(업무): 시청·종각·광화문","유출형(주거): 외곽역","→ 피크 분산이 핵심"],key:"수요 분산 정책은 08·18시 두 봉우리를 겨냥",src:"서울 열린데이터광장(2026)"});
evid({k:"근거 04 · 공간 분포",h:"상위 10% 역이 전체의 28.5% — 도심·강남권 집중",img:"근거4_지도.png",
  cards:[["28.5%","상위10% 역 집중도",RED]],bul:["Top: 잠실·서울역·고속터미널","홍대입구·강남 (환승 허브)","→ 소수 지점 집중 관리 가능"],key:"혼잡은 소수 핫스팟에 집중 → 집중 투자가 효율적",src:"서울 열린데이터광장·공공데이터포털(좌표)"});
evid({k:"근거 05 · 사고 분석 (5년 2,837건)",h:"사고도 같은 시간에 몰린다 — 출근 사고율이 2.65배",img:"근거5_사고시간대.png",
  cards:[["2.65배","출근 사고율\n(포아송·비피크 대비)",RED],["34.4%","출퇴근 4시간 집중",RED]],bul:["08시 374건 최다, 퇴근 2.50배","사고 +81% 증가(2021→2024)","유형 75%가 혼잡 직결"],key:"혼잡 시간대 = 사고 다발 시간대, 데이터로 확증",src:"서울교통공사 최근5년 사고현황(2,837건); 팀 분석(포아송)"});
evid({k:"근거 06 · 역 유형 (K-means 군집)",h:"역은 업무지구·주거·상시형 3가지로 나뉜다 → 유형별 대책",img:"근거6_군집패턴.png",
  cards:[["3유형","K-means 군집",NAVY]],bul:["업무지구형 50역 (강남·여의도)","주거형 131역 (신림·구로)","상시·환승형 76역 (잠실·서울역)"],key:"혼잡 대책은 역마다가 아니라 '유형별 맞춤'으로",src:"서울 열린데이터광장(2026); 팀 분석(K-means)"});

// 12 노후화
s=p.addSlide(); s.background={color:WHITE}; tab(s,1); kick(s,"분석 · 구조적 원인");
head(s,"왜 반복되나 — 노후 설비가 사고·장애를 키운다");
stat(s,0.6,2.1,3.9,"56.5%","21년 이상 노후 전동차\n(기대수명 25~30년)",RED);
stat(s,4.72,2.1,3.9,"69.5%","내구연한 초과 전선로\n(케이블 3,158km)",RED);
stat(s,8.84,2.1,3.9,"+5.4%","운행장애 증가('23년 136건)\n신호장애 +31%",NAVY);
card(s,0.6,3.95,12.13,1.85,BG);
s.addText("노후가 장애의 절반 이상 — 교체는 진행 중",{x:0.9,y:4.1,w:11,h:0.4,fontSize:13.5,bold:true,color:NAVY,fontFace:F,margin:0});
s.addText([{text:"운행장애 원인: 차량 32.6% + 신호 20.9% = 절반 이상이 노후 설비",options:{bullet:true,breakLine:true}},
{text:"노후 전동차 교체: 2029년까지 총 3조 8,506억원 투입(진행 중)",options:{bullet:true}}],
{x:0.95,y:4.52,w:11.4,h:1.2,fontSize:13,color:INK,fontFace:F,valign:"top",paraSpaceAfter:5});
key(s,"노후 설비 = 사고의 구조적 뿌리 → 예방정비·교체 예산이 근본 대책");
ftr(s,"국정감사 자료·철도경제신문; 서울교통공사");

// 13 대안 비교 매트릭스
s=p.addSlide(); s.background={color:WHITE}; tab(s,2); kick(s,"대안 비교");
head(s,"왜 투트랙인가 — 대안 비교 평가");
const C2=NAVY,O="6D7882",X=RED;
function cell(t,c){return {text:t,options:{align:"center",bold:true,color:WHITE,fill:{color:c}}};}
const mtx=[
[{text:"평가 기준",options:{bold:true,color:WHITE,fill:{color:NAVY},align:"center"}},{text:"현상 유지",options:{bold:true,color:WHITE,fill:{color:NAVY},align:"center"}},{text:"단일(혼잡만)",options:{bold:true,color:WHITE,fill:{color:NAVY},align:"center"}},{text:"투트랙(혼잡+사고)",options:{bold:true,color:WHITE,fill:{color:NAVY},align:"center"}}],
[{text:"효과성",options:{fontFace:F}},cell("✕",X),cell("△",O),cell("◎",C2)],
[{text:"효율성(집중투자)",options:{fontFace:F}},cell("✕",X),cell("△",O),cell("◎",C2)],
[{text:"안전(사고 대응)",options:{fontFace:F}},cell("✕",X),cell("✕",X),cell("◎",C2)],
[{text:"실현가능성",options:{fontFace:F}},cell("◎",C2),cell("△",O),cell("○",O)]];
s.addTable(mtx,{x:1.4,y:2.1,w:10.5,colW:[3.0,2.5,2.5,2.5],rowH:0.66,fontFace:F,fontSize:13,color:INK,valign:"middle",align:"left",border:{type:"solid",pt:1,color:"FFFFFF"}});
s.addText("◎ 우수   ○ 양호   △ 보통   ✕ 미흡",{x:1.4,y:5.35,w:10.5,h:0.3,fontSize:10.5,color:GRAYD,fontFace:F});
key(s,"투트랙만이 '혼잡 완화'와 '사고 대응'을 동시에 — 안전 기준에서 유일한 해");
ftr(s,"정책분석 4대 기준(효과성·효율성·형평성·실현가능성)");

// 14 제안 투트랙
s=p.addSlide(); s.background={color:WHITE}; tab(s,2); kick(s,"제안");
head(s,"취약 지점 우선 투자 + 사고·수요 대응 — 투트랙");
function track(x,title,items){const w=5.9,y=1.95,h=4.0; card(s,x,y,w,h,BG);
  s.addShape(p.shapes.ROUNDED_RECTANGLE,{x,y,w,h:0.78,fill:{color:NAVY},rectRadius:0.06});
  s.addText(title,{x:x+0.3,y,w:w-0.6,h:0.78,fontSize:16,bold:true,color:WHITE,valign:"middle",fontFace:F,margin:0});
  s.addText(items.map(t=>({text:t,options:{bullet:true,breakLine:true,paraSpaceAfter:9}})),{x:x+0.35,y:y+1.02,w:w-0.7,h:2.8,fontSize:13,color:INK,fontFace:F,valign:"top"});}
track(0.6,"🚇 서울교통공사 (운영·실행)",["집중역·역유형별 맞춤 혼잡 관리","사고·급정차 시 비상 혼잡 대응 프로토콜","신호·전기 설비 예방정비","집중역 동선·승강설비 개선, 피크 증차"]);
track(6.83,"🏛️ 국회 국토교통위 (입법·예산)",["시차출퇴근·유연근무 인센티브(수요 분산)","노후 신호·전동차 교체 예산 확보","이상상황 대응 기준 법제화","광역교통·직주근접 도시계획 연계"]);
key(s,"실행 주체(공사)와 제도·예산 주체(국회)가 함께 가야 완성");
ftr(s);

// 15 정책 수단 메뉴
s=p.addSlide(); s.background={color:WHITE}; tab(s,2); kick(s,"제안 · 정책 수단");
head(s,"혼잡 분산 정책 카드 — 수요·공급·가격 3축");
[["수요 관리",["시차출퇴근·유연근무 장려금","공공기관 시차출퇴근 의무화","교통유발부담금 감면(대형 빌딩)"]],
["공급·하드웨어",["의자 없는(접이식) 지하철 칸","급행·셔틀 탄력 배차","환승역 일방통행·동선 안내"]],
["가격·기술 제어",["혼잡통행료·혼잡세→대중교통 재투자","실시간 혼잡도 연동 요금","급행/일반 요금 차등화"]]].forEach((col,i)=>{
  const x=0.6+i*4.06,y=2.0,w=3.86,h=3.85; card(s,x,y,w,h,BG);
  s.addShape(p.shapes.ROUNDED_RECTANGLE,{x,y,w,h:0.7,fill:{color:STEEL},rectRadius:0.06});
  s.addText(col[0],{x,y,w,h:0.7,fontSize:15,bold:true,color:WHITE,align:"center",valign:"middle",fontFace:F,margin:0});
  s.addText(col[1].map(t=>({text:t,options:{bullet:true,breakLine:true,paraSpaceAfter:8}})),{x:x+0.28,y:y+0.92,w:w-0.56,h:2.8,fontSize:12,color:INK,fontFace:F,valign:"top"});});
key(s,"데이터 피크(2호선·08·18시·도심·역유형)에 맞춰 정책 카드를 조합");
ftr(s,"고용노동부·서울시·국토부 정책 사례");

// 16 해외 벤치마크
s=p.addSlide(); s.background={color:WHITE}; tab(s,3); kick(s,"실행 · 해외 벤치마크");
head(s,"검증된 해법이 있다 — 해외 도시의 성과");
[["싱가포르","신호(CBTC) 교체","신뢰성 1~10배↑"],["뉴욕","실시간·칸별 정보","체감 대기 50%↓"],
["런던","노후 4개선 현대화","수송 용량 33%↑"],["홍콩","장애 벌과금→운임 환원","정시율 99.9%"]].forEach((b,i)=>{
  const x=0.6+i*3.06,y=2.15,w=2.9,h=2.9; card(s,x,y,w,h);
  s.addText(b[0],{x,y:y+0.28,w,h:0.45,fontSize:17,bold:true,color:NAVY,align:"center",fontFace:F,margin:0});
  s.addText(b[1],{x:x+0.15,y:y+0.85,w:w-0.3,h:0.8,fontSize:12,color:GRAYD,align:"center",fontFace:F,margin:0,valign:"top",lineSpacingMultiple:1.1});
  s.addText(b[2],{x:x+0.1,y:y+1.7,w:w-0.2,h:0.7,fontSize:15,bold:true,color:RED,align:"center",fontFace:F,margin:0,valign:"top"});});
key(s,"실시간 정보 + 노후 신호 교체 + 책임성(환원) = 입증된 조합");
ftr(s,"LTA·TfL·MTA·SCMP 등 해외 교통당국 발표");

// 17 Action Plan (공약 5요소) + 비용편익
s=p.addSlide(); s.background={color:WHITE}; tab(s,3); kick(s,"실행 · Action Plan");
head(s,"실행계획 — 목표·이행방법·기한·재원 (공약 수준 완결성)");
const ap=[
[{text:"제안",options:{bold:true,color:WHITE,fill:{color:NAVY},align:"center"}},{text:"목표(KPI)",options:{bold:true,color:WHITE,fill:{color:NAVY}}},{text:"이행 방법",options:{bold:true,color:WHITE,fill:{color:NAVY}}},{text:"기한",options:{bold:true,color:WHITE,fill:{color:NAVY},align:"center"}},{text:"재원",options:{bold:true,color:WHITE,fill:{color:NAVY},align:"center"}}],
["집중역 혼잡·사고 대응","안전사고 0건","실시간 안내+안전인력+예방정비","단기","공사 운영비"],
["수요 분산","피크 ○% 분산","시차출퇴근 인센티브+증차","중기","국비·기업"],
["노후 설비 교체","사고 건수↓","신호·전동차 교체+안전기준 법제화","중장기","3.85조(국비)"],
["광역·직주근접","도심 집중도↓","광역교통·도시계획 연계","장기","국비·지방비"]];
s.addTable(ap,{x:0.6,y:1.95,w:8.7,colW:[1.9,1.6,3.0,0.9,1.3],rowH:0.7,fontFace:F,fontSize:11,color:INK,valign:"middle",align:"left",border:{type:"solid",pt:1,color:GRAYL}});
card(s,9.55,1.95,3.2,3.95,BG);
s.addText("💸 비용편익",{x:9.7,y:2.1,w:2.9,h:0.4,fontSize:13.5,bold:true,color:NAVY,fontFace:F,margin:0});
s.addText("81.3조원",{x:9.55,y:2.6,w:3.2,h:0.65,fontSize:27,bold:true,color:RED,align:"center",fontFace:F,margin:0});
s.addText("연 교통혼잡비용(GDP 3.37%)\n= 줄여야 할 사회적 손실",{x:9.7,y:3.3,w:2.9,h:0.8,fontSize:11,color:GRAYD,align:"center",fontFace:F,margin:0,lineSpacingMultiple:1.15});
s.addText("정책 효과(해외): 분산 2~7%\n→ 혼잡 완화 투자는 비용이 아닌 '회수'",{x:9.7,y:4.25,w:2.9,h:1.4,fontSize:11.5,color:INK,align:"center",fontFace:F,margin:0,valign:"top",lineSpacingMultiple:1.2});
key(s,"근거1~6 → 제안 → 기대효과가 1:1로 연결된 실행계획");
ftr(s,"KOTI 교통혼잡비용(2023); 해외 정책 효과");

// 18 마무리
s=p.addSlide(); s.background={color:NAVY};
s.addText("혼잡과 사고가 겹치는 취약 지점을 데이터로 짚었다.",{x:0.9,y:2.0,w:11.5,h:0.9,fontSize:24,bold:true,color:WHITE,fontFace:F,lineSpacingMultiple:1.1});
s.addText("이제, 우선순위 투자로 안전을 지킬 차례다.",{x:0.9,y:3.0,w:11.5,h:0.9,fontSize:24,bold:true,color:"CADCFC",fontFace:F});
s.addText("상위 10% 역 28.5% 집중   ·   출근 사고율 2.65배   ·   교통혼잡비용 연 81.3조원",{x:0.9,y:4.2,w:11.5,h:0.5,fontSize:15,bold:true,color:"CADCFC",fontFace:F});
s.addShape(p.shapes.LINE,{x:0.92,y:4.92,w:3.2,h:0,line:{color:"3A5575",width:1.5}});
s.addText("분석: 민토 SCQA·피라미드 · 기초통계(ANOVA·효과크기·Tukey·포아송) · K-means 군집 · Wilke 시각화",{x:0.9,y:5.18,w:11.5,h:0.4,fontSize:11,color:"8FA4BC",fontFace:F});
s.addText("자료: 서울 열린데이터광장 · 공공데이터포털 · 한국교통연구원(KOTI) · 언론 보도",{x:0.9,y:5.56,w:11.5,h:0.4,fontSize:11,color:"8FA4BC",fontFace:F});

p.writeFile({fileName:"/Users/yoon/Documents/데이터분석/발표장표_지하철혼잡.pptx"}).then(f=>console.log("✅ 생성:",f,"|",PG-1,"내부페이지"));
