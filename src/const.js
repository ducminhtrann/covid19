import moment from "moment";

export const TIME_FORMAT = "DD/MM/YYYY HH:mm:ss";
export const MOCK_DATA_COVID19 = "MOCK_DATA_COVID19";
export const getTime = (time) => {
  return {
    time: moment(time).format(TIME_FORMAT),
    ago: moment(time).fromNow(),
  };
};
export const formatNumber = (num) => new Intl.NumberFormat().format(num);
