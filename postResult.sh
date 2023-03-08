RESP=$(curl -H "Content-Type: application/json" -X POST -H "Authorization: Bearer `curl -H "Content-Type: application/json" -X POST --data @"cloud_auth.json" https://xray.cloud.getxray.app/api/v2/authenticate | cut -d '"' -f2 | cut -d '"' -f1`" --data @"xrayReady.json" "https://xray.cloud.getxray.app/api/v1/import/test/bulk")
echo "$RESP"
if [ $RESP == "{}" ]
then
 echo "⚠️ Report was not sent. Please, check if your data is correct 📃"
else
 echo "🚀 Sent to XRAY 🚀"
fi