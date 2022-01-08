# Script to track all mp4 files 
VIDEO_FILES=$(find . | grep "mp4")
# echo "${video_files}"
for FILE in ${VIDEO_FILES}
do
	git add ${FILE}
done

