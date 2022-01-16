import { TimeRange, TimeRangeEvent, TimeSeries } from "pondjs";
import React, { Component } from "react";
import { Charts, ChartContainer, ChartRow, EventChart, Resizable } from "react-timeseries-charts";
import { timeFormat } from "d3-time-format";

export default class MachineGraph extends Component {
    render() {
        let endTime = this.getEndDate();
        let startTime = new Date(endTime);
        startTime.setDate(endTime.getDate() - 1);
        let timeRange = new TimeRange(startTime, endTime);

        let events = this.props.items.map(
            ({ startTime, endTime, ...data }) => new TimeRangeEvent(new TimeRange(new Date(startTime), new Date(endTime)), data)
        );
        let series = new TimeSeries({ events });

        return (
            <Resizable style={{width: '90%'}}>
                <ChartContainer format={DATE_FORMAT} timeRange={timeRange}>
                    <ChartRow height={GRAPH_HEIGHT}>
                        <Charts>
                            <EventChart
                                series={series}
                                style={(event, state) => this.getStyle(event, state)} />
                        </Charts>
                    </ChartRow>
                </ChartContainer>
            </Resizable>
        );
    }

    getStyle(event, _state) {
        return {
            fill: this.getBarColour(event.get("type")),
            height: GRAPH_HEIGHT
        };
    }

    getBarColour(type) {
        switch (type) {
            case "on": {
                return "#227A1E";
            }
            case "off":
            default: {
                return "#817D70";
            }
        }
    }
    
    getEndDate() {
        if (this.props.items.length === 0) {
            return new Date();
        }
        return new Date(this.props.items[this.props.items.length - 1].endTime);
    }
}

const DATE_FORMAT = timeFormat("%H:%M");
const GRAPH_HEIGHT = 55;
