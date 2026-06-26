# 🚇 Seoul Subway Congestion & Accident Analysis → Policy Proposal

> **"Congestion and accidents pile up in the same place."**
> An analysis of Seoul Metro Lines 1–9 (ridership + 5-year accident data) that pinpoints the **"most dangerous congestion-vulnerable spots when an accident hits,"** and delivers a **proposal + Action Plan** for policymakers (Seoul Metro · National Assembly Land·Transport Committee).

`Scope: Seoul Lines 1–9` · `Data: 2015–2026` · `Audience: policymakers`

## 📋 Project Info
| Item | Detail |
|---|---|
| **Host** | Yeardream School, 6th cohort (이어드림스쿨 6기) |
| **Team** | Online Team 9 (비대면 9팀) |
| **Members** | Im Jong-won · Park Sang-jin · Yoon Eun-mi (3) |
| **Period** | **2026-06-25 ~ 06-26** (2 days) · fully online |
| **Topic** | Seoul subway congestion & accident analysis → policy proposal (SCQA · Action Plan) |
| **Audience** | Policymakers (Seoul Metro · National Assembly Transport Committee) |
| **Deliverables** | Presentation [`.pptx`](발표장표_지하철혼잡.pptx) / [`.pdf`](발표장표_지하철혼잡.pdf) · Analysis notebook [`.ipynb`](notebooks/지하철_혼잡도_분석.ipynb) |
| **Stack** | Python (pandas · scipy · statsmodels · scikit-learn · matplotlib · folium) · Statistics (ANOVA · t-test · η² · Tukey · Poisson · K-means) · Minto SCQA/Pyramid · Wilke visualization |

## 🎯 Evaluation Criteria & Our Response
| Criterion | Our Response |
|---|---|
| ① **SCQA** — frame the data-analysis problem | SCQA + "Analysis Design" slides making Situation·Complication·Question·Answer explicit |
| ② **Pyramid evidence** — statistics (t-test · ANOVA · regression) | Evidence 1–6 + **t-test** (t=5.18) · **ANOVA** (η²=.28 · Tukey) · **Poisson regression** · **K-means** + MECE grouping |
| ③ **Visualization** | 8 Wilke-style charts + folium real map + crowd-density (people/㎡) comparison |
| ④ **Action Plan (So What?)** — *missing = instant elimination* | Line-type-specific prescriptions + two-track + **sourced budget · CBA ("insurance" logic)** |

## 🔬 Analysis Roadmap
![Analysis Roadmap](assets/analysis_roadmap.png)

## 📌 Key Findings (TL;DR)
| # | Evidence | Finding |
|---|---|---|
| 1 | Ridership trend | COVID **–27%** plunge → **91% rebound** by 2024 |
| 2 | By line · typology | **Line 2 dominates** (t·ANOVA) + **MECE typology** — Line 9 = demand-forecast failure / supply shortage |
| 3 | Time of day | Morning **alighting 08:00** · evening **boarding 18:00** twin peaks |
| 4 | Spatial | **Top 10% of stations = 28.5%** of all ridership (CBD · Gangnam) |
| 5 | Accidents ⭐ | **08:00 peak · 34.4% in rush hours** (count 2.65×; **~1.3× after exposure adjustment** → the point is *overlap impact*, not frequency) · **+81%↑** |
| 6 | Station types (K-means) | **Business · residential · all-day — 3 types** → tailored measures |

> **Conclusion**: Congestion causes **differ by line** → **type-specific prescriptions** (single MECE axis = "bottleneck location"):
> **A. Structural overload = supply bottleneck** (2·9) → expand supply · **B. Time/direction skew = demand bottleneck** (3·4·6·7·8) → demand spreading · **C. Transfer-load & aging = infra bottleneck** (1·5) → infrastructure renewal.
> Prevention is **"insurance"**: a **~4.7T KRW** budget (mostly already allocated) recovers Seoul subway congestion cost (**~725B KRW/yr**) + recurring accident damage. *(The national **road** congestion cost of 81.3T KRW [KOTI 2023, subway excluded] is macro context — not "money we save".)*

> **🚨 Safety impact (objective comparison)**: Line 2 rush-hour ≈ **3.9–4.5 people/㎡** — twice the event safety limit (2/㎡); worst segment 6.6/㎡ (high-risk). On the same scale as the **Itaewon crowd crush (9–10.7/㎡, NFS estimate)**. If an accident overlaps this density, crush mechanics can begin. (Fruin 1971 · G.K. Still · Helbing 2012)

**Analysis frame**: Minto SCQA/Pyramid · statistics (ANOVA · η² · Tukey · Poisson) · K-means clustering · Claus Wilke visualization → proposal · Action Plan

## 📊 Key Visuals
| Crowd density (people/㎡) — everyday vs. crush disasters | Congestion map (folium, real basemap) |
|:---:|:---:|
| ![Crowd density comparison](charts/안전_밀집도비교.png) | ![Congestion map](charts/근거4_folium지도.png) |

*(Charts are labeled in Korean — the analysis & deck target a Korean policy audience.)*

## 📂 Repository Structure
| Path | Contents |
|---|---|
| **[`발표장표_지하철혼잡.pptx`](발표장표_지하철혼잡.pptx)** · [`.pdf`](발표장표_지하철혼잡.pdf) | 🎤 **Final deck — 24 body slides (+5 appendix, excluded from page count · `n/24` numbering)**: policy-report tone (navy/gray + Apple SD Gothic Neo), diagonal hero cover, section dividers, impact one-page summary, analysis design (pyramid), **line typology (MECE · A/B/C bottleneck)**, crowd-density (people/㎡), **cost-vs-damage CBA ("insurance")**, embedded YouTube news · field video (1.5×) · folium map. Appendix: aging infra · overseas cases · FOI request · alternative comparison |
| **[`notebooks/지하철_혼잡도_분석.ipynb`](notebooks/지하철_혼잡도_분석.ipynb)** | 📓 **Analysis notebook (source code)** — Evidence 1–6 + line typology (with MECE assertion) + statistics (t·ANOVA·η²·Tukey·Poisson·K-means), reproducible on Colab |
| `data/` · root `…ridership.csv` | Raw data — time-of-day ridership · station coords · 5-year accidents (CSV/XLSX, `cp949`) |
| `charts/` | 8 analysis charts + crowd-density comparison (`안전_밀집도비교.png`) + folium congestion map (`지하철_혼잡_지도.html` → `근거4_folium지도.png`) |
| `영상/` (videos) | Field video (filmed by team · 1.5×) · news montage (archive) — main deck uses an embedded SBS YouTube clip |
| `assets/` | Cover hero images (Unsplash·Pexels, free license) + analysis roadmap diagram |
| `docs/` | Problem definition · proposal & action plan · data-collection spec · FOI draft · meeting brief |
| `docs/research/` | Research notes · density-comparison sources · **policy-feasibility review** · textbook application (all source-cited) |
| Root reports | Team's "line-by-line congestion causes" · "AI accident data" · "accident news cases" · "policy cases" · model-answer analysis |
| Reference PDFs | Seoul Institute "subway congestion causes & measures" · KOTI "traffic congestion cost (2023)" |
| `scripts_build_deck.js` · `scripts_fix_rels.py` | Deck build (pptxgenjs) · `.rels` `&`-escape fix script |

## ▶️ How to Reproduce
1. Open `notebooks/지하철_혼잡도_분석.ipynb` in Colab
2. Upload data — files in `data/` + the root `…ridership.csv` (main). The notebook's `D()` helper auto-locates paths
3. Run the Korean-font install cell → run all cells
> ⚠️ CSVs use **`cp949`** encoding (`pd.read_csv(..., encoding='cp949')`)

## 📊 Data Sources
- **Seoul Open Data Plaza** — ridership by line · station · time-of-day (main dataset)
- **data.go.kr (Public Data Portal)** — urban-rail station coords · Seoul Metro 5-year accidents (2,837) · congestion rate (%)
- **KOTI / Seoul Institute** — traffic congestion cost (2023 · national **road** · subway excluded) · "subway congestion causes & measures" report
- **Line typology · Line 9** — Seoul Metro congestion rate (express 195%) · Line 9 demand controversy · KCI paper "cost-effectiveness of Line 9 congestion improvement" · team "line-by-line causes"
- **Crowd density (people/㎡)** — National Forensic Service (Itaewon estimate) · Fruin (1971)·G.K.Still·Helbing (2012) thresholds · Seoul Metro congestion (160 capacity/car · 60.84㎡) · Seoul subway congestion cost 725B KRW (2016, Seoul Economic Daily)
- **Accident cases** — Sangwangsimni rear-end collision (2014, Wikipedia·NFS) · YTN·MBC·Newsis·Yonhap reports (team "accident news cases")
- **FOI request (in progress)** — Seoul Metro receipt no. 16931975 (filed 2026-06-25 → reply expected 07-08): car-level congestion · Line 9 · disruption impact · aging-facility/congestion budgets

## 📝 License / Copyright Notice
- Documents, code, and the deck authored by the team are under the [MIT License](LICENSE).
- ⚠️ **NOT covered by MIT (original rights holders)**:
  - Textbook PDFs (Wilke, Field, ISLP, Minto) — respective publishers/authors
  - `02_데이터분석프로젝트/` lecture materials — Yeardream School / instructor
- 🔒 This repository is **private**. Before making it public, remove the above copyrighted materials, any personal info in screenshots (contacts), and faces in the field video.
