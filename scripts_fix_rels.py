#!/usr/bin/env python3
"""pptx의 .rels 안 외부 URL에서 이스케이프 안 된 &를 &amp;로 고침.
pptxgenjs가 online video(YouTube) 외부 링크의 &를 XML 이스케이프하지 않아
PowerPoint가 '파일 손상'으로 열지 못하는 문제를 해결한다.
사용: python3 scripts_fix_rels.py 발표장표_지하철혼잡.pptx"""
import sys, re, zipfile, shutil

ENT = re.compile(r'&(?!amp;|lt;|gt;|quot;|apos;|#\d+;|#x[0-9a-fA-F]+;)')

def fix(path):
    tmp = path + ".tmp"
    fixed = 0
    with zipfile.ZipFile(path, "r") as zin, zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED) as zout:
        for item in zin.infolist():
            data = zin.read(item.filename)
            if item.filename.endswith(".rels"):
                txt = data.decode("utf-8")
                new = ENT.sub("&amp;", txt)
                if new != txt:
                    fixed += 1
                data = new.encode("utf-8")
            zout.writestr(item, data)
    shutil.move(tmp, path)
    print(f"rels & 이스케이프 수정: {fixed}개 파일")

if __name__ == "__main__":
    fix(sys.argv[1])
