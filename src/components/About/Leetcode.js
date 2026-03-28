import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import ActivityCalendar from "react-activity-calendar";

const LEETCODE_USERNAME = "user3929hZ";

function transformCalendarData(submissionCalendar) {
  const calendar = JSON.parse(submissionCalendar);

  const today = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(today.getFullYear() - 1);
  oneYearAgo.setDate(oneYearAgo.getDate() + 1);

  const allDates = [];
  const current = new Date(oneYearAgo);

  while (current <= today) {
    // LeetCode uses UTC midnight timestamps as keys
    const dateStr = current.toISOString().split("T")[0];
    const timestamp = String(
      Math.floor(
        Date.UTC(
          current.getFullYear(),
          current.getMonth(),
          current.getDate()
        ) / 1000
      )
    );
    const count = calendar[timestamp] || 0;
    const level =
      count === 0 ? 0 : count === 1 ? 1 : count <= 3 ? 2 : count <= 6 ? 3 : 4;
    allDates.push({ date: dateStr, count, level });
    current.setDate(current.getDate() + 1);
  }

  return allDates;
}

function Leetcode() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/calendar`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.submissionCalendar) {
          setData(transformCalendarData(json.submissionCalendar));
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My LeetCode <strong className="purple">Activity</strong>
      </h1>
      {loading && (
        <p style={{ color: "white", textAlign: "center" }}>
          Loading LeetCode activity...
        </p>
      )}
      {error && (
        <p style={{ color: "grey", textAlign: "center" }}>
          Could not load LeetCode activity.
        </p>
      )}
      {!loading && !error && data.length > 0 && (
        <ActivityCalendar
          data={data}
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
          showWeekdayLabels
        />
      )}
    </Row>
  );
}

export default Leetcode;
