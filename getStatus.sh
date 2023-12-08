node testGenerator.js

post_result_output=$(sh postResult.sh)

job_id=$(echo "$post_result_output" | jq -r '.jobId')

if [ -n "$job_id" ]; then
  TOKEN=$(curl -H "Content-Type: application/json" -X POST --data @"cloud_auth.json" https://xray.cloud.getxray.app/api/v2/authenticate | cut -d '"' -f2 | cut -d '"' -f1)

  REPORT_ID="$job_id"

  sleep 5

  RESPONSE=$(curl -H "Content-Type: application/json" -X GET -H "Authorization: Bearer $TOKEN" "https://xray.cloud.getxray.app/api/v2/import/test/bulk/$REPORT_ID/status")

  echo "Status of report with ID $REPORT_ID:"
  echo "$RESPONSE"
else
  echo "Failed to extract jobId from Post output."
fi
