const pptxgen=require("pptxgenjs"); const p=new pptxgen();
p.defineLayout({name:"W",width:13.33,height:7.5}); p.layout="W";
p.author="데이터분석팀"; p.title="서울 지하철 혼잡·사고 정책 제언";
const C="/Users/yoon/Documents/데이터분석/charts/";
const HERO="/Users/yoon/Documents/데이터분석/assets/hero_station.jpg";
const VID="/Users/yoon/Documents/데이터분석/영상/뉴스몽타주.mp4";
const NAVY="112E51", STEEL="205493", INK="1E2124", GRAYD="6D7882", GRAYL="C7CDD4", BG="F4F5F6", WHITE="FFFFFF", RED="C0392B";
const F="Apple SD Gothic Neo";
const sh=()=>({type:"outer",color:"AAB2BD",blur:7,offset:2,angle:90,opacity:0.22});
const TABS=["문제","분석","대안","실행"]; let PG=0; const TOTAL=24; let APX=0; let INAPX=false;
function tab(s,a){let x=9.0; TABS.forEach((t,i)=>{const w=1.0,y=0.33,h=0.34;
  if(i===a){s.addShape(p.shapes.ROUNDED_RECTANGLE,{x,y,w,h,fill:{color:NAVY},rectRadius:0.04}); s.addText(t,{x,y,w,h,fontSize:10.5,bold:true,color:WHITE,align:"center",valign:"middle",fontFace:F,margin:0});}
  else s.addText(t,{x,y,w,h,fontSize:10.5,color:"AEB6C0",align:"center",valign:"middle",fontFace:F,margin:0}); x+=w+0.04;});}
function kick(s,t){s.addText(t,{x:0.84,y:0.34,w:8,h:0.3,fontSize:11.5,bold:true,color:STEEL,fontFace:F,margin:0,charSpacing:1});}
function head(s,t){s.addShape(p.shapes.RECTANGLE,{x:0.6,y:0.37,w:0.1,h:1.0,fill:{color:NAVY}});
  s.addText(t,{x:0.84,y:0.72,w:11.8,h:0.95,fontSize:22,bold:true,color:NAVY,fontFace:F,margin:0,valign:"top",lineSpacingMultiple:1.05});}
function divider(num,t,sub){let s=p.addSlide(); s.background={color:NAVY};
  s.addText(num,{x:0.78,y:0.85,w:7,h:2.7,fontSize:150,bold:true,color:"22436B",fontFace:F,margin:0});
  s.addShape(p.shapes.RECTANGLE,{x:0.95,y:4.2,w:0.78,h:0.1,fill:{color:"56B4E9"}});
  s.addText(t,{x:0.9,y:4.4,w:11.5,h:0.9,fontSize:36,bold:true,color:WHITE,fontFace:F,margin:0});
  s.addText(sub,{x:0.92,y:5.4,w:11.5,h:0.5,fontSize:16,color:"9FB2CC",fontFace:F,margin:0}); pn(s,true);}
function pn(s,dark){let t; if(INAPX){APX++; t="부록 "+APX;} else {PG++; t=PG+" / "+TOTAL;}
  s.addText(t,{x:11.55,y:7.06,w:1.35,h:0.3,fontSize:9,color:dark?"8FA4BC":GRAYD,align:"right",fontFace:F,margin:0});}
function ftr(s,srcTxt){ if(srcTxt)s.addText("자료: "+srcTxt,{x:0.6,y:6.96,w:9.5,h:0.3,fontSize:8.5,color:GRAYD,fontFace:F,margin:0});
  s.addText("서울 지하철 혼잡·사고 정책 제언",{x:0.6,y:7.18,w:9,h:0.25,fontSize:8,color:GRAYL,fontFace:F,margin:0});
  pn(s,false);}
function img(s,f,x,y,w,h){s.addImage({path:C+f,x,y,w,h,sizing:{type:"contain",w,h}});}
function card(s,x,y,w,h,fill){s.addShape(p.shapes.ROUNDED_RECTANGLE,{x,y,w,h,fill:{color:fill||WHITE},line:{color:GRAYL,width:1},rectRadius:0.06,shadow:sh()});}
function stat(s,x,y,w,num,label,clr){card(s,x,y,w,1.5);
  s.addText(num,{x,y:y+0.16,w,h:0.66,fontSize:25,bold:true,color:clr||NAVY,align:"center",fontFace:F,margin:0});
  s.addText(label,{x:x+0.07,y:y+0.88,w:w-0.14,h:0.55,fontSize:10.5,color:GRAYD,align:"center",fontFace:F,margin:0,valign:"top",lineSpacingMultiple:1.05});}
function key(s,txt){s.addShape(p.shapes.ROUNDED_RECTANGLE,{x:0.6,y:6.15,w:12.13,h:0.66,fill:{color:NAVY},rectRadius:0.05});
  s.addText([{text:"핵심  ",options:{bold:true,color:"9DB2CC"}},{text:txt,options:{bold:true,color:WHITE}}],{x:0.95,y:6.15,w:11.4,h:0.66,fontSize:13,valign:"middle",fontFace:F,margin:0});}

// 1 표지 (히어로 이미지 + 대각선 네이비 블록)
let s=p.addSlide(); s.background={path:HERO};
s.addShape(p.shapes.RECTANGLE,{x:0,y:0,w:13.33,h:7.5,fill:{color:NAVY,transparency:20}});       // 전체 톤 통일
s.addShape(p.shapes.RECTANGLE,{x:-4.6,y:-3,w:12.3,h:13.5,fill:{color:NAVY,transparency:5},rotate:9}); // 대각선 네이비 블록
s.addShape(p.shapes.RECTANGLE,{x:6.05,y:-1.2,w:0.07,h:10.5,fill:{color:"56B4E9"},rotate:9});          // 시안 액센트 사선
s.addText("정책 제언 보고서  ·  POLICY BRIEF",{x:0.9,y:1.32,w:7.2,h:0.4,fontSize:12.5,bold:true,color:"8FB4DC",fontFace:F,charSpacing:2});
s.addText("서울 지하철 혼잡·사고\n데이터 분석을 통한\n안전·수요 대응 정책 제안",{x:0.88,y:1.92,w:7.3,h:2.85,fontSize:33,bold:true,color:WHITE,fontFace:F,lineSpacingMultiple:1.1});
s.addShape(p.shapes.LINE,{x:0.95,y:5.0,w:2.9,h:0,line:{color:"56B4E9",width:2.2}});
s.addText("\"출퇴근, 혼잡도 사고도 한 곳에 몰린다\"",{x:0.9,y:5.16,w:7,h:0.5,fontSize:15,italic:true,color:"CFE0F5",fontFace:F});
s.addText("서울 1~9호선 · 2015–2026 · 대상: 서울교통공사 · 국회 국토교통위",{x:0.9,y:6.22,w:7.2,h:0.4,fontSize:11,color:"9FB2CC",fontFace:F});
s.addText("이어드림스쿨 6기 · 비대면 9팀 · 100종원 · 2026.6",{x:0.9,y:6.6,w:7.8,h:0.35,fontSize:11.5,bold:true,color:"AEC4DE",fontFace:F});
pn(s,true);

// 2 Executive Summary (결론 먼저)
s=p.addSlide(); s.background={color:WHITE}; tab(s,0); kick(s,"요약 · EXECUTIVE SUMMARY");
head(s,"혼잡도 사고도 한 곳에 몰린다 — 취약 지점에 우선 투자하라");
stat(s,0.6,2.15,2.9,"2.10배","2호선 역당 이용 집중\n(t=5.18 · η²=.28)",NAVY);
stat(s,3.68,2.15,2.9,"≈4명/㎡","평소 출근 밀집 = 군중\n'위험선'(Fruin·Still)",RED);
stat(s,6.76,2.15,2.9,"34.4%","사고도 출퇴근 집중\n(8시 최다 · 상왕십리)",RED);
stat(s,9.84,2.15,2.9,"4.7조","사업비 대부분 편성\n= 피해 줄이는 '보험료'",NAVY);
s.addShape(p.shapes.ROUNDED_RECTANGLE,{x:0.6,y:4.45,w:12.13,h:1.45,fill:{color:BG},line:{color:GRAYL,width:1},rectRadius:0.06});
s.addText([{text:"제언   ",options:{bold:true,color:RED,fontSize:15}},{text:"원인은 호선마다 다르다 → 유형별 '맞춤 처방'",options:{bold:true,color:NAVY,fontSize:15}}],{x:0.95,y:4.58,w:11.5,h:0.45,fontFace:F,margin:0,valign:"middle"});
s.addText("A. 구조적 고혼잡(2·9) → 공급 확대    ·    B. 시간·방향 쏠림(3·4·6·7·8) → 수요 분산    ·    C. 광역환승·노후(1·5) → 노후 개량",{x:0.95,y:5.12,w:11.5,h:0.4,fontSize:11.5,color:INK,fontFace:F,margin:0});
s.addText("예방투자(4.7조·대부분 편성)로 서울 지하철 혼잡비용(연 7,247억)·반복 사고 피해를 회수 — '비용'이 아닌 '보험료'",{x:0.95,y:5.5,w:11.5,h:0.35,fontSize:11,italic:true,bold:true,color:STEEL,fontFace:F,margin:0});
ftr(s);

// 2-2 분석 설계 (민토 피라미드 + 통계 방법) — 평가기준 1·2 대응
s=p.addSlide(); s.background={color:WHITE}; tab(s,0); kick(s,"분석 설계 · 방법론");
head(s,"SCQA로 문제 정의 → 통계로 검증한 피라미드 근거 → Action Plan");
s.addText("민토 피라미드 (결론 먼저)",{x:0.6,y:1.92,w:6,h:0.35,fontSize:12.5,bold:true,color:STEEL,fontFace:F,margin:0});
s.addShape(p.shapes.RECTANGLE,{x:2.35,y:2.45,w:2.5,h:0.82,fill:{color:NAVY}});
s.addText([{text:"결론 (Governing Thought)",options:{bold:true,color:"9DB6D6",fontSize:9,breakLine:true}},{text:"취약지점 우선투자 + 사고·수요 대응",options:{bold:true,color:WHITE,fontSize:10.5}}],{x:2.35,y:2.45,w:2.5,h:0.82,align:"center",valign:"middle",fontFace:F,margin:0,lineSpacingMultiple:1.05});
s.addShape(p.shapes.RECTANGLE,{x:1.5,y:3.33,w:4.2,h:0.92,fill:{color:STEEL}});
s.addText([{text:"근거 그룹핑 (MECE)",options:{bold:true,color:"CFE0F0",fontSize:9,breakLine:true}},{text:"호선 유형 A·B·C · 시간 · 공간 · 사고 · 노후",options:{color:WHITE,fontSize:10}}],{x:1.55,y:3.33,w:4.1,h:0.92,align:"center",valign:"middle",fontFace:F,margin:0,lineSpacingMultiple:1.05});
s.addShape(p.shapes.RECTANGLE,{x:0.65,y:4.31,w:5.9,h:1.02,fill:{color:"6D7882"}});
s.addText([{text:"통계·데이터 (검증)",options:{bold:true,color:"E5E8EB",fontSize:9,breakLine:true}},{text:"t-test · ANOVA(η²·Tukey) · 포아송 회귀 · K-means",options:{color:WHITE,fontSize:10,breakLine:true}},{text:"사고 5년 2,837건 + 시간대별 승하차 + 좌표",options:{color:"E5E8EB",fontSize:9}}],{x:0.7,y:4.31,w:5.8,h:1.02,align:"center",valign:"middle",fontFace:F,margin:0,lineSpacingMultiple:1.08});
const methods=[["t-test","2호선 vs 그 외 역당 이용객 2.10배 — t=5.18, p<.001, Cohen's d=1.28(큰 효과)"],
["ANOVA","호선 간 차이 — F=14.8, p<.001, η²=.28(大) · Tukey 2호선>6개선"],
["포아송 회귀","사고 시간대 효과 정량화 (이용객 노출 보정)"],
["K-means 군집","역 → 업무지구·주거·상시형 3유형 분류"]];
methods.forEach((m,i)=>{const y=1.95+i*1.03; card(s,6.95,y,5.8,0.9);
  s.addShape(p.shapes.ROUNDED_RECTANGLE,{x:7.1,y:y+0.17,w:1.5,h:0.56,fill:{color:NAVY},rectRadius:0.05});
  s.addText(m[0],{x:7.1,y:y+0.17,w:1.5,h:0.56,fontSize:10.5,bold:true,color:WHITE,align:"center",valign:"middle",fontFace:F,margin:0});
  s.addText(m[1],{x:8.75,y:y+0.04,w:3.9,h:0.82,fontSize:10,color:INK,valign:"middle",fontFace:F,margin:0,lineSpacingMultiple:1.06});});
key(s,"문제정의(SCQA) → 통계로 검증한 피라미드 근거 → 시각화 → 실행(So What)까지 한 흐름");
ftr(s,"분석 프레임: 민토 피라미드 · 통계(Field) · 시각화(Wilke) · ISLP 군집");

divider("01","문제 정의","평소 혼잡한 곳에 사고가 겹치면 '안전 위협'이 된다");

// 3 문제정의 SCQA
s=p.addSlide(); s.background={color:WHITE}; tab(s,0); kick(s,"데이터 분석 문제 정의 · 민토 SCQA");
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
s.addMedia({type:"online", link:"https://www.youtube.com/embed/x-IJ8ivb4ro?start=33&end=45", x:3.37, y:1.8, w:6.58, h:3.7});
s.addText("▶ SBS 뉴스 「목숨 건 출근길…여전한 김포 지옥철」 · 핵심 구간 0:33~0:45 (인터넷 연결 필요)",{x:3.0,y:5.6,w:7.33,h:0.3,fontSize:10,italic:true,color:GRAYD,align:"center",fontFace:F,margin:0});
key(s,"\"목숨 건 출근길\" — 압사 위험이 해마다 반복 보도되는 구조적 문제");
ftr(s,"SBS 뉴스(YouTube 임베드) · 발표 시 스트리밍");

// 4-2 실제 현장 영상 (팀원 직접 촬영)
s=p.addSlide(); s.background={color:WHITE}; tab(s,0); kick(s,"문제 · 실제 현장");
head(s,"그날 출근길, 실제 현장 — 멈춰선 열차·빼곡한 승강장");
s.addMedia({type:"video", path:"/Users/yoon/Documents/데이터분석/영상/현장영상.mp4", x:3.37, y:1.8, w:6.58, h:3.7});
s.addText("▶ 이어드림스쿨 6기 前 취재팀 임종원 촬영 · 2025.7.4 오전 8시 2호선 서울대입구역 (신호장애 당일)",{x:2.4,y:5.6,w:8.53,h:0.3,fontSize:9.5,italic:true,color:GRAYD,align:"center",fontFace:F,margin:0});
key(s,"뉴스 속 그 사고, 우리 취재팀이 그 자리에 있었다 — 데이터 너머의 현실");
ftr(s,"이어드림스쿨 6기 前 취재팀 임종원 촬영(2025.7.4 서울대입구역)");

// 5 안전위험 데이터
s=p.addSlide(); s.background={color:WHITE}; tab(s,0); kick(s,"문제의 심각성 · 안전");
head(s,"출근길 혼잡은 이미 '압사 위험' 수준이다");
stat(s,0.6,2.1,3.9,"6.6명/㎡","구로역 퇴근 252%(1호선)\n= 군중 '고위험'선(5명/㎡) 돌파",RED);
stat(s,4.72,2.1,3.9,"200%+","김포골드라인 출근 혼잡\n(수년째 개선 안 됨)",RED);
stat(s,8.84,2.1,3.9,"170%↑","이동 불가·얼굴 밀착\n(150%면 어깨 부딪침)",NAVY);
card(s,0.6,3.95,12.13,1.85,BG);
s.addText("실제 사고 사례 — 신호·설비 결함이 부르는 대형 피해",{x:0.9,y:4.04,w:11.5,h:0.4,fontSize:13,bold:true,color:NAVY,fontFace:F,margin:0});
s.addText([{text:"2014.5.2  2호선 상왕십리역 추돌(신호 이상 방치) → 부상 약 388명·약 8.5시간 운행 차질",options:{bullet:true,breakLine:true,bold:true,color:RED}},
{text:"2025.7.4  2호선 서울대입구역 신호장애 → 약 4시간 운행 차질",options:{bullet:true,breakLine:true}},
{text:"2025.8.4  4호선 평촌역 전기 장애 → 350명 환승·7개 열차 지연",options:{bullet:true}}],
{x:0.95,y:4.44,w:11.4,h:1.3,fontSize:12,color:INK,fontFace:F,valign:"top",paraSpaceAfter:4});
key(s,"가장 혼잡한 노선·출근 피크에 사고 발생 → 평시 혼잡 = 사고 취약성");
ftr(s,"상왕십리역 추돌사고(2014, 위키백과); 경향·아시아경제; 서울교통공사");

// 5-2 군중 밀집도 객관 비교 (명/㎡)
s=p.addSlide(); s.background={color:WHITE}; tab(s,0); kick(s,"문제의 심각성 · 군중 밀집도");
head(s,"같은 잣대(명/㎡)로 보면 — 평소 출근길이 이미 '위험선'에 다가서 있다");
img(s,"안전_밀집도비교.png",0.55,1.9,8.8,4.15);
card(s,9.5,1.9,3.25,4.15,BG);
s.addText("군중과학 위험 기준",{x:9.67,y:2.02,w:2.95,h:0.35,fontSize:13,bold:true,color:NAVY,fontFace:F,margin:0});
s.addText([{text:"2명/㎡ — 행사 안전한계(Still)",options:{bullet:true,breakLine:true}},
{text:"5명/㎡ — 위험 상한",options:{bullet:true,breakLine:true}},
{text:"6~7명/㎡ — 군중 유체화·자력이동 불가",options:{bullet:true,breakLine:true}},
{text:"9~10.7명/㎡ — 이태원 참사(NFS)",options:{bullet:true}}],
{x:9.7,y:2.45,w:2.9,h:2.05,fontSize:10.8,color:INK,fontFace:F,valign:"top",paraSpaceAfter:7,lineSpacingMultiple:1.05});
s.addShape(p.shapes.ROUNDED_RECTANGLE,{x:9.62,y:4.72,w:3.0,h:1.28,fill:{color:NAVY},rectRadius:0.05});
s.addText([{text:"2호선 평소 ≈ 4명/㎡ ",options:{bold:true,color:"FFFFFF"}},
{text:"(안전한계 2배)\n",options:{color:"CADCFC"}},
{text:"최악 구간 6.6명/㎡ = 고위험",options:{bold:true,color:"F4C430"}}],
{x:9.74,y:4.8,w:2.76,h:1.12,fontSize:11.5,fontFace:F,valign:"middle",lineSpacingMultiple:1.18,margin:0});
key(s,"평소가 '위험선'에 가까운 상태 → 급정차·신호장애가 겹치면 쏠림·압사 메커니즘 작동");
ftr(s,"Fruin(1971)·G.K.Still·Helbing(2012); 국립과학수사연구원; 서울교통공사 혼잡도");

// 6~11 근거 1~6
function evid(e){let s=p.addSlide(); s.background={color:WHITE}; tab(s,1); kick(s,e.k); head(s,e.h);
  img(s,e.img,0.55,1.9,7.55,4.15);
  e.cards.forEach((c,i)=>stat(s,8.55+i*2.34,1.95,2.14,c[0],c[1],c[2]));
  s.addText(e.bul.map(t=>({text:t,options:{bullet:true,breakLine:true}})),{x:8.55,y:3.6,w:4.45,h:2.3,fontSize:12,color:INK,fontFace:F,valign:"top",paraSpaceAfter:6});
  key(s,e.key); ftr(s,e.src);}
divider("02","데이터로 본 실태","혼잡과 사고는 어디·언제에 몰리는가 — 근거 1~6");

evid({k:"근거 01 · 이용객 추이",h:"코로나로 –27% 급감 후 빠르게 재혼잡 (2024년 91% 회복)",img:"근거1_연도추이.png",
  cards:[["–27.4%","2020 코로나",RED],["91%","2024 회복",NAVY]],bul:["수요가 다시 출퇴근에 집중","평시 부하↑ → 사고 시 위험↑"],key:"회복된 수요 = 혼잡·사고 리스크 재상승",src:"서울 열린데이터광장(2026)"});
evid({k:"근거 02 · 호선별 비교",h:"혼잡은 2호선에 집중 — 유의할 뿐 아니라 효과도 크다",img:"근거2_호선Top8.png",
  cards:[["η²=0.28","ANOVA 大효과(28% 설명)",RED],["d=1.28","t-test 큰 효과",NAVY]],bul:["t-test: 2호선 vs 그외 2.10배 (t=5.18, p<.001)","ANOVA F=14.8, p<.001 · Tukey 2호선>6개선","→ 2호선 우선 투자 근거"],key:"t-test·ANOVA 모두 유의 + 실질 효과(η²=.28, d=1.28) 큼",src:"서울 열린데이터광장(2026); 팀 분석(t-test·ANOVA·Tukey)"});
// 근거 2-2 · 호선 유형화 (진단 → 그룹 → 처방)
s=p.addSlide(); s.background={color:WHITE}; tab(s,1); kick(s,"분석 · 호선 유형화");
head(s,"혼잡 원인은 호선마다 다르다 — 유형별 '맞춤 처방'");
const LT={bold:true,color:WHITE,fill:{color:NAVY},valign:"middle",align:"center"};
const types=[
[{text:"유형 (지배적 병목)",options:LT},{text:"호선",options:LT},{text:"혼잡 원인 (진단)",options:LT},{text:"맞춤 처방",options:LT}],
[{text:"A. 구조적 고혼잡\n(공급 병목)",options:{bold:true,color:RED}},{text:"2 · 9",options:{bold:true,color:RED,align:"center"}},{text:"순환선 절대수요(2)·급행 쏠림+6량 공급부족(9) → 기저 혼잡 상시",options:{bold:true,color:INK}},{text:"공급 확대: 증결(9호선 6→8량)·집중배차·CBTC",options:{bold:true,color:INK}}],
["B. 시간·방향 쏠림\n(수요 병목)","3·4·6·7·8","주거–업무 분리 → 쌍봉 피크·편방향 병목 (7호선 어대~건대, 4호선 수유~혜화)","수요 분산: 시차출퇴근·비피크 할인·병목 동선"],
["C. 광역환승·노후\n(인프라 병목)","1 · 5","광역철도 환승 부하(1호선 구로~신도림)+노후 → 사고 연계 혼잡","노후 신호·차량 교체 + 환승 동선 개선"]];
s.addTable(types,{x:0.6,y:1.9,w:12.13,colW:[2.35,1.0,5.15,3.63],rowH:[0.45,0.95,0.95,0.95],fontFace:F,fontSize:11,color:INK,valign:"middle",align:"left",border:{type:"solid",pt:1,color:GRAYL}});
s.addShape(p.shapes.ROUNDED_RECTANGLE,{x:0.6,y:5.32,w:12.13,h:0.8,fill:{color:"F1ECEC"},line:{color:GRAYL,width:1},rectRadius:0.05});
s.addText([{text:"9호선의 역설   ",options:{bold:true,color:RED}},{text:"6량(2호선 10량)·급행 쏠림 → 역당 이용 최하위인데 혼잡 최상위(급행 195%) = '못 늘려서(공급 부족)'. 원인이 다르니 유형별 처방이 답.",options:{color:INK}}],{x:0.85,y:5.32,w:11.6,h:0.8,fontSize:10.5,fontFace:F,valign:"middle",lineSpacingMultiple:1.12,margin:0});
key(s,"MECE 분류 — 단일 기준(수요÷공급 '병목 위치')으로 9개 호선 중복·누락 없이 3유형 · A:공급확대 B:수요분산 C:인프라개량");
ftr(s,"서울교통공사 혼잡도; 서울연구원·KOTI 보고서; 팀 「호선별 혼잡 원인」 분석");

evid({k:"근거 03 · 시간대 패턴",h:"출근 08시·퇴근 18시 — 뾰족한 출퇴근 쌍봉 피크",img:"근거3_시간대.png",
  cards:[["08시","출근 하차피크",NAVY],["18시","퇴근 승차피크",STEEL]],bul:["유입형(업무): 시청·종각·광화문","유출형(주거): 외곽역","→ 피크 분산이 핵심"],key:"수요 분산 정책은 08·18시 두 봉우리를 겨냥",src:"서울 열린데이터광장(2026)"});
evid({k:"근거 04 · 공간 분포",h:"상위 10% 역이 전체의 28.5% — 도심·강남권 집중",img:"근거4_folium지도.png",
  cards:[["28.5%","상위10% 역 집중도",RED]],bul:["Top: 잠실·서울역·고속터미널","홍대입구·강남 (환승 허브)","→ 소수 지점 집중 관리 가능"],key:"혼잡은 소수 핫스팟에 집중 → 집중 투자가 효율적",src:"서울 열린데이터광장·공공데이터포털(좌표)"});
evid({k:"근거 05 · 사고 분석 (5년 2,837건)",h:"사고는 혼잡과 '같은 시간'에 겹친다 — 터지는 순간 피해가 최대",img:"근거5_사고시간대.png",
  cards:[["374건","08시 사고 최다\n(전 시간대 1위)",RED],["×1.27","포아송 노출보정 사고율\n(건수 2.65배 ≠ 실제)",NAVY]],bul:["출퇴근 4시간에 34.4% 집중","건수 2.65배지만 이용객도 ~1.8배 → 노출효과","핵심은 '빈도'가 아니라 4명/㎡ 밀집에 겹치는 '영향'"],key:"사고가 출근 피크에 겹치면 = 최다 인원·최고 밀집에서 피해 → 영향 최대",src:"서울교통공사 5년 사고현황(2,837건); 팀 분석(시간대별 노출 보정)"});
evid({k:"근거 06 · 역 유형 (K-means 군집)",h:"역은 업무지구·주거·상시형 3가지로 나뉜다 → 유형별 대책",img:"근거6_군집패턴.png",
  cards:[["3유형","K-means 군집",NAVY]],bul:["업무지구형 50역 (강남·여의도)","주거형 131역 (신림·구로)","상시·환승형 76역 (잠실·서울역)"],key:"혼잡 대책은 역마다가 아니라 '유형별 맞춤'으로",src:"서울 열린데이터광장(2026); 팀 분석(K-means)"});

// (노후화 → 부록으로 이동)

divider("03","대안과 제안","무엇을, 왜, 어떻게 — 투트랙 해법");

// (대안 비교 매트릭스 → 부록으로 이동)

// 14 제안 투트랙
s=p.addSlide(); s.background={color:WHITE}; tab(s,2); kick(s,"제안");
head(s,"취약 지점 우선 투자 + 사고·수요 대응 — 투트랙");
function track(x,title,items){const w=5.9,y=1.95,h=4.0; card(s,x,y,w,h,BG);
  s.addShape(p.shapes.ROUNDED_RECTANGLE,{x,y,w,h:0.78,fill:{color:NAVY},rectRadius:0.06});
  s.addText(title,{x:x+0.3,y,w:w-0.6,h:0.78,fontSize:16,bold:true,color:WHITE,valign:"middle",fontFace:F,margin:0});
  s.addText(items.map(t=>({text:t,options:{bullet:true,breakLine:true,paraSpaceAfter:9}})),{x:x+0.35,y:y+1.02,w:w-0.7,h:2.8,fontSize:13,color:INK,fontFace:F,valign:"top"});}
track(0.6,"서울교통공사 (운영·실행)",["집중역·역유형별 맞춤 혼잡 관리","사고·급정차 시 비상 혼잡 대응 프로토콜","신호·전기 설비 예방정비","집중역 동선·승강설비 개선, 피크 증차"]);
track(6.83,"국회 국토교통위 (입법·예산)",["무임수송 손실 국비 분담 → 안전투자 여력 확보","노후 신호·전동차 교체 '제때 집행' 예산","5분 기준 정시율 공표 + 운행중단 승객 환급제","공공기관 시차 확대·광역/직주근접 연계"]);
key(s,"실행 주체(공사)와 제도·예산 주체(국회)가 함께 가야 완성");
ftr(s);

// 15 정책 수단 — 실현가능성 티어 (팀 검토 반영)
s=p.addSlide(); s.background={color:WHITE}; tab(s,2); kick(s,"제안 · 정책 수단");
head(s,"실현가능성으로 거른 정책 — 즉시 실행부터 보류까지");
const tiers=[
["즉시 · 저비용·기존 권한",NAVY,["혼잡역 동선개선·일방통행·실시간 혼잡 안내","집중배차(피크 증회) — 2호선 사당 10%p↓ 실증","사고·급정차 시 비상 대응 + 안전인력 배치","5분 기준 정시율·운행장애 공표(투명성)"]],
["단기~중기 · 이미 편성→가속",STEEL,["노후 신호·전동차 교체 '제때 집행'(4.65조 진행)","피크 증차 1,025억(국비 256·25% 확보)","운행중단 시 승객 환급제(홍콩식 변형)"]],
["중장기 · 구조·수요분산",STEEL,["공공기관 시차출퇴근 확대(보조·효과 ~2%)","비혼잡 시간대 '할인'(할증 아님)","직주근접·광역교통 연계","인구변화 대비 유연 투자(가동률 중심)"]]];
tiers.forEach((col,i)=>{const x=0.6+i*4.06,y=1.95,w=3.86,h=3.05; card(s,x,y,w,h,BG);
  s.addShape(p.shapes.ROUNDED_RECTANGLE,{x,y,w,h:0.6,fill:{color:col[1]},rectRadius:0.06});
  s.addText(col[0],{x:x+0.1,y,w:w-0.2,h:0.6,fontSize:11.5,bold:true,color:WHITE,align:"center",valign:"middle",fontFace:F,margin:0});
  s.addText(col[2].map(t=>({text:t,options:{bullet:true,breakLine:true,paraSpaceAfter:6}})),{x:x+0.24,y:y+0.74,w:w-0.46,h:2.25,fontSize:10.2,color:INK,fontFace:F,valign:"top",lineSpacingMultiple:1.04});});
s.addShape(p.shapes.ROUNDED_RECTANGLE,{x:0.6,y:5.1,w:12.13,h:0.92,fill:{color:"F1ECEC"},line:{color:GRAYL,width:1},rectRadius:0.05});
s.addText([{text:"✗ 보류·부적합 (검토 결과 제외)   ",options:{bold:true,color:RED}},
{text:"혼잡통행료·혼잡세(할증) — 첨두 비탄력·역진성  ·  실시간 연동 할증요금  ·  시차 대규모 장려금(분산 ~2%·ROI 낮음)  ·  시차 의무화(현행 30% 권고·이용률 17.7%)",options:{color:INK}}],
{x:0.85,y:5.1,w:11.6,h:0.92,fontSize:9.8,fontFace:F,valign:"middle",lineSpacingMultiple:1.12,margin:0});
key(s,"\"새 돈\"이 아니라 이미 약속된 안전사업을 제때 — 효과 큰 것부터, 안 되는 건 솔직히 보류");
ftr(s,"서울교통공사·국토부·KOTI; 해외(MTR·멜버른) 사례 — 실현성 검토 반영");

divider("04","실행 계획","재원 → 액션 플랜 → 기대효과");

// (해외 벤치마크 → 부록으로 이동)

// 17 Action Plan (공약 5요소) + 비용편익
s=p.addSlide(); s.background={color:WHITE}; tab(s,3); kick(s,"실행 · Action Plan (So What?)");
head(s,"실행계획 — 목표·이행방법·기한·재원 (공약 수준 완결성)");
const ap=[
[{text:"제안",options:{bold:true,color:WHITE,fill:{color:NAVY},align:"center"}},{text:"목표(KPI)",options:{bold:true,color:WHITE,fill:{color:NAVY}}},{text:"이행 방법",options:{bold:true,color:WHITE,fill:{color:NAVY}}},{text:"기한",options:{bold:true,color:WHITE,fill:{color:NAVY},align:"center"}},{text:"재원",options:{bold:true,color:WHITE,fill:{color:NAVY},align:"center"}}],
["집중역 혼잡·사고 대응","피크 안전사고 0건","실시간 안내+안전인력+비상 프로토콜","즉시","공사 운영비"],
["피크 공급 확대","9호선 199→159%","증차(1,025억·진행중)+집중배차","단기","국비25%+공사"],
["노후 설비 교체 가속","장애·사고↓","신호·전동차 '제때 집행'","중기","4.65조(편성분)"],
["안전투자 여력 확보","적자에 안 밀림","무임손실 국비분담+정시율 공표","중기","국비(입법)"],
["수요분산·직주근접","도심 집중↓","시차(보조)+광역/도시계획","장기","국비·지방비"]];
s.addTable(ap,{x:0.6,y:1.95,w:8.7,colW:[1.9,1.55,3.05,0.9,1.3],rowH:0.62,fontFace:F,fontSize:10.5,color:INK,valign:"middle",align:"left",border:{type:"solid",pt:1,color:GRAYL}});
card(s,9.55,1.95,3.2,3.95,BG);
s.addText("비용 vs 피해 (보험료)",{x:9.7,y:2.1,w:2.95,h:0.4,fontSize:12.5,bold:true,color:NAVY,fontFace:F,margin:0});
s.addText("7,247억/년",{x:9.55,y:2.6,w:3.2,h:0.62,fontSize:24,bold:true,color:RED,align:"center",fontFace:F,margin:0});
s.addText("서울 지하철 혼잡 사회적 비용\n＋ 반복되는 사고·운행장애 피해",{x:9.7,y:3.25,w:2.9,h:0.7,fontSize:9.5,color:GRAYD,align:"center",fontFace:F,margin:0,lineSpacingMultiple:1.15});
s.addText("투자 4.7조 대부분 이미 편성\n→ 예방이 사후 피해보다 싸다",{x:9.7,y:4.05,w:2.9,h:1.0,fontSize:10.5,bold:true,color:STEEL,align:"center",fontFace:F,margin:0,valign:"top",lineSpacingMultiple:1.2});
s.addText("※ 81.3조=전국 '도로' 혼잡비용(KOTI'23·지하철 제외)",{x:9.68,y:5.52,w:2.95,h:0.4,fontSize:7.3,italic:true,color:GRAYL,align:"center",fontFace:F,margin:0,lineSpacingMultiple:1.05});
key(s,"근거1~6 → 제안 → 기대효과가 1:1로 연결된 실행계획");
ftr(s,"KOTI 교통혼잡비용(2023); 해외 정책 효과");

// 17-2 재원 계획 (공개 데이터 기반)
s=p.addSlide(); s.background={color:WHITE}; tab(s,3); kick(s,"실행 · 재원");
head(s,"재원 — 공개된 예산·계획 자료로 검증한 사업비");
const bh={bold:true,color:WHITE,fill:{color:NAVY},align:"center",valign:"middle"};
const bud=[
[{text:"정책 수단",options:bh},{text:"사업비",options:bh},{text:"기대효과",options:bh},{text:"출처(공개자료)",options:bh}],
["① 노후 전동차 교체","3조 8,500억","25년초과 2,800칸 신차","서울시 안전보강대책·시의회'25"],
["② 무선통신 신호(CBTC)","약 800억¹","혼잡도 평균 20%↓²","서울시'26.4 발표"],
["③ 4·7·9호선 증차(8편성)","1,025억(국비 256억)","9호선 199→159%²","서울시·공사'24.3"],
["④ 스크린도어 노후 개량","3,535억","투신사망 33→0건","서울시'16.11"],
["⑤ 통합관제·안전시스템","3,110억","통합 모니터링·신속대응","서울시'26.4 발표"],
[{text:"합계 (①~⑤)",options:{bold:true,fill:{color:BG}}},{text:"약 4조 6,970억",options:{bold:true,color:RED,fill:{color:BG}}},{text:"검증된 공개 수치 기반",options:{italic:true,color:GRAYD,fill:{color:BG}}},{text:"",options:{fill:{color:BG}}}]];
s.addTable(bud,{x:0.6,y:1.95,w:9.0,colW:[2.5,1.95,2.25,2.3],rowH:0.55,fontFace:F,fontSize:10.5,color:INK,valign:"middle",align:"left",border:{type:"solid",pt:1,color:GRAYL}});
s.addText("¹ 우이신설선 기준 추정치(전 노선 확대 시 증가)    ² 서울시 자체 전망치",{x:0.6,y:5.88,w:9.0,h:0.3,fontSize:9,italic:true,color:GRAYD,fontFace:F,margin:0});
card(s,9.78,1.95,2.95,3.95,BG);
s.addText("편익: 예방투자 = '보험료'",{x:9.9,y:2.06,w:2.78,h:0.35,fontSize:12,bold:true,color:NAVY,fontFace:F,margin:0});
s.addText("7,247억원",{x:9.78,y:2.48,w:2.95,h:0.55,fontSize:24,bold:true,color:RED,align:"center",fontFace:F,margin:0});
s.addText("서울 지하철 혼잡 사회적 비용/년\n(2016, 서울경제)",{x:9.85,y:3.04,w:2.8,h:0.55,fontSize:9.5,color:GRAYD,align:"center",fontFace:F,margin:0,lineSpacingMultiple:1.08});
s.addText("＋ 반복 사고·운행장애 피해\n(상왕십리 1회 = 388명·8.5h)",{x:9.85,y:3.66,w:2.8,h:0.55,fontSize:9.5,color:GRAYD,align:"center",fontFace:F,margin:0,lineSpacingMultiple:1.08});
s.addText("→ 사업비 4.7조(대부분 편성)는\n혼잡피해 수년·대형사고 1회로 회수",{x:9.88,y:4.3,w:2.78,h:0.9,fontSize:10,bold:true,color:STEEL,align:"center",fontFace:F,margin:0,valign:"top",lineSpacingMultiple:1.15});
s.addText("※ 81.3조=전국 '도로' 교통혼잡비용(KOTI'23·지하철 제외)",{x:9.82,y:5.55,w:2.9,h:0.4,fontSize:7.3,italic:true,color:GRAYL,align:"center",fontFace:F,margin:0,lineSpacingMultiple:1.05});
key(s,"사업비는 추정이 아니라 공개된 예산·계획 문서로 뒷받침된 수치");
ftr(s,"서울시·서울교통공사 발표·예산, 한국교통연구원(항목별 출처 표기)");

// (다음 단계 → 부록으로 이동)

// 18 마무리
s=p.addSlide(); s.background={color:NAVY};
s.addText("“",{x:0.78,y:0.5,w:3,h:1.5,fontSize:120,bold:true,color:"1E3C63",fontFace:"Georgia",margin:0});
s.addText("혼잡과 사고가 겹치는 취약 지점을 데이터로 짚었다.",{x:0.9,y:2.05,w:11.5,h:0.9,fontSize:24,bold:true,color:WHITE,fontFace:F,lineSpacingMultiple:1.1});
s.addText("이제, 우선순위 투자로 안전을 지킬 차례다.",{x:0.9,y:3.0,w:11.5,h:0.9,fontSize:24,bold:true,color:"CADCFC",fontFace:F});
s.addText("평소 출근 ≈ 4명/㎡(위험밀도)   ·   서울 지하철 혼잡비용 연 7,247억   ·   예방투자 = '보험료'",{x:0.9,y:4.2,w:11.5,h:0.5,fontSize:15,bold:true,color:"CADCFC",fontFace:F});
s.addShape(p.shapes.LINE,{x:0.92,y:4.92,w:3.2,h:0,line:{color:"3A5575",width:1.5}});
s.addText("분석: 민토 SCQA·피라미드 · 기초통계(ANOVA·효과크기·Tukey·포아송) · K-means 군집 · Wilke 시각화",{x:0.9,y:5.18,w:11.5,h:0.4,fontSize:11,color:"8FA4BC",fontFace:F});
s.addText("자료: 서울 열린데이터광장 · 공공데이터포털 · 한국교통연구원(KOTI) · 언론 보도",{x:0.9,y:5.56,w:11.5,h:0.4,fontSize:11,color:"8FA4BC",fontFace:F});
pn(s,true);

// ===== 부록 (Appendix) — 본문 페이지 수 제외 =====
INAPX=true;
divider("부록","Appendix","상세 분석 · 해외 사례 · 다음 단계 (본문 페이지 수에서 제외)");

// 부록 A. 노후화
s=p.addSlide(); s.background={color:WHITE}; kick(s,"부록 · 구조적 원인");
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

// 부록 B. 해외 벤치마크
s=p.addSlide(); s.background={color:WHITE}; kick(s,"부록 · 해외 벤치마크");
head(s,"검증된 해법이 있다 — 해외 도시의 성과");
[["싱가포르","신호(CBTC) 교체","신뢰성 1~10배↑"],["뉴욕","실시간·칸별 정보","체감 대기 50%↓"],
["런던","노후 4개선 현대화","수송 용량 33%↑"],["홍콩","장애 벌과금→운임 환원","정시율 99.9%"]].forEach((b,i)=>{
  const x=0.6+i*3.06,y=2.15,w=2.9,h=2.9; card(s,x,y,w,h);
  s.addText(b[0],{x,y:y+0.28,w,h:0.45,fontSize:17,bold:true,color:NAVY,align:"center",fontFace:F,margin:0});
  s.addText(b[1],{x:x+0.15,y:y+0.85,w:w-0.3,h:0.8,fontSize:12,color:GRAYD,align:"center",fontFace:F,margin:0,valign:"top",lineSpacingMultiple:1.1});
  s.addText(b[2],{x:x+0.1,y:y+1.7,w:w-0.2,h:0.7,fontSize:15,bold:true,color:RED,align:"center",fontFace:F,margin:0,valign:"top"});});
key(s,"실시간 정보 + 노후 신호 교체 + 책임성(환원) = 입증된 조합");
ftr(s,"LTA·TfL·MTA·SCMP 등 해외 교통당국 발표");

// 부록 C. 다음 단계 (정보공개청구)
s=p.addSlide(); s.background={color:WHITE}; kick(s,"부록 · 다음 단계");
head(s,"제안에서 멈추지 않는다 — 원천 데이터로 분석·제안을 고도화");
card(s,0.6,1.95,4.35,4.05,BG);
s.addShape(p.shapes.ROUNDED_RECTANGLE,{x:0.6,y:1.95,w:4.35,h:0.66,fill:{color:NAVY},rectRadius:0.06});
s.addText("진행 중 · 정보공개청구",{x:0.82,y:1.95,w:4.0,h:0.66,fontSize:13.5,bold:true,color:WHITE,valign:"middle",fontFace:F,margin:0});
s.addText([{text:"접수기관 · 서울교통공사\n",options:{breakLine:true,bold:true}},
{text:"접수번호 · 16931975\n",options:{breakLine:true}},
{text:"접수일 · 2026.06.25\n",options:{breakLine:true}},
{text:"회신 예정 · 2026.07.08 (처리 10일)\n",options:{breakLine:true,bold:true,color:STEEL}},
{text:"진행 · 처리부서 지정 (7단계 중 3)",options:{}}],
{x:0.85,y:2.85,w:3.95,h:2.3,fontSize:12,color:INK,fontFace:F,valign:"top",lineSpacingMultiple:1.55,margin:0});
s.addText("학술·교육 목적 · 개인정보 제외 집계자료 요청",{x:0.85,y:5.5,w:3.95,h:0.4,fontSize:9.5,italic:true,color:GRAYD,fontFace:F,margin:0});
const fh={bold:true,color:WHITE,fill:{color:STEEL},valign:"middle"};
const foi=[[{text:"청구 자료 (5종)",options:fh},{text:"→ 분석·제안 고도화",options:fh}],
["칸(객차) 단위 혼잡도","칸별 혼잡 핫스팟 → 동선·안전인력 배치"],
["9호선 시간대별 혼잡도","최혼잡 9호선 보강(현재 1~8호선 위주)"],
["운행장애·사고 지연 영향","사고→지연·영향인원 정량화 → 비용편익 정교화"],
["노후 설비 현황·교체 예산","노후도–사고 상관 + 교체 우선순위 도출"],
["혼잡완화 조치·예산","조치별 예산 대비 효과 검증"]];
s.addTable(foi,{x:5.2,y:1.95,w:7.55,colW:[2.95,4.6],rowH:0.66,fontFace:F,fontSize:11.5,color:INK,valign:"middle",align:"left",border:{type:"solid",pt:1,color:GRAYL}});
key(s,"공개 통계로 문제를 '입증'했고 → 원천 데이터로 해법을 '정밀화'한다 (살아있는 분석)");
ftr(s,"정보공개포털 open.go.kr · 접수번호 16931975(서울교통공사, 2026.6.25 접수)");

// 부록 D. 대안 비교 매트릭스
s=p.addSlide(); s.background={color:WHITE}; kick(s,"부록 · 대안 비교");
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

p.writeFile({fileName:"/Users/yoon/Documents/데이터분석/발표장표_지하철혼잡.pptx"}).then(f=>console.log("✅ 생성:",f,"|",PG-1,"내부페이지"));
