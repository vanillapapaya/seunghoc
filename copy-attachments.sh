#!/bin/bash

# Typora 이미지를 public으로 복사하는 스크립트
echo "Copying blog attachments to public folder..."

# blog attachment 폴더들을 찾아서 public으로 복사
find src/content/blog -name "attachment" -type d | while read dir; do
    # 상위 폴더 이름 (블로그 포스트 폴더명) 추출
    parent=$(basename "$(dirname "$dir")")
    
    # public/blog/폴더명/attachment 구조로 복사
    mkdir -p "public/blog/$parent"
    cp -r "$dir" "public/blog/$parent/"
    
    echo "Copied $dir to public/blog/$parent/attachment"
done

echo "Done copying attachments!"
