# Script to track all mp4 files 
VIDEO_FILES=$(find . | grep "mp4")
# echo "${video_files}"
SLUG_IGNORE=.slugignore

if ! test -f "$SLUG_IGNORE"; then
	touch "${SLUG_IGNORE}"
fi

for FILE in ${VIDEO_FILES}
do
	echo "${FILE}" >> "$SLUG_IGNORE"
done
