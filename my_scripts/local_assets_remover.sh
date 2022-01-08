# Script to remove all mp4 files 
VIDEO_FILES=$(find . | grep "mp4")

for FILE in ${VIDEO_FILES}
do
	rm "${FILE}"
done
