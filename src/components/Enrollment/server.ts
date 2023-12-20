import axios from 'axios';

class GetLectureItems {
  lectureItems: any[];
  highSchoolLectureItems: any[];
  middleSchoolLectureItems: any[];

  constructor() {
    this.lectureItems = [];
    this.highSchoolLectureItems = [];
    this.middleSchoolLectureItems = [];

    this.getLectureItems();
  }

  async getStudentInfo() {
    try {
      const response = await axios.post('https://staging.onuii.com/getLectureInfo');
    } catch (error) {}
  }

  async getLectureItems() {
    try {
      const response = await axios.post('https://staging.onuii.com/Lecture_StoreItems');
      this.lectureItems = response.data.ONUEI_RES.DATA.RESPONSE.LECTURE_ITEMS;
      this.lectureFilterByGroupNo();
    } catch (error) {}
  }

  lectureFilterByGroupNo() {
    this.highSchoolLectureItems = this.lectureItems.filter((item) => item.group_No === 65);
    this.middleSchoolLectureItems = this.lectureItems.filter((item) => item.group_No === 64);
  }
}

export default GetLectureItems;
