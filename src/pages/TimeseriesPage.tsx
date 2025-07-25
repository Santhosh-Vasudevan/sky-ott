import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import Loader from "../components/Loader";
import Layout from "../components/Layout";
import { fetchTimeseriesData } from "../services/api";

import { DataPoint } from "../types";

const Container = styled.div`
  padding: 20px;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 24px 0;
  color: #333;
`;

const StyledLink = styled(Link)`
  padding: 10px 16px;
  background-color: #0070f3;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: #005bb5;
  }
`;

const ChartWrapper = styled.div`
  background: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 0px;
  }
`;

const TimeseriesPage: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const timeseries = await fetchTimeseriesData();
        setData(timeseries);
      } catch (err) {
        setError("Could not load timeseries data.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const formatTime = (ts: number) => new Date(ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <Layout>
      <Container>
        <h1>Timeseries Dashboard</h1>
        <Description>
          This dashboard shows total streaming activity over time across all content on the platform.
          Use it to analyze viewer trends and peak usage periods.
        </Description>

        <StyledLink to="/movies">📽️ Browse Movies</StyledLink>

        {loading && <Loader />}
        {error && <p>{error}</p>}

        {!loading && !error && (
          <ChartWrapper>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="timestamp"
                  tickFormatter={formatTime}
                  minTickGap={20}
                />
                <YAxis />
                <Tooltip
                  labelFormatter={(label) =>
                    new Date(label).toLocaleString()
                  }
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#0070f3"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartWrapper>
        )}
      </Container>
    </Layout>
  );
};

export default TimeseriesPage;