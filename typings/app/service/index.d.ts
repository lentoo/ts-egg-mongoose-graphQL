// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBase from '../../../app/service/Base';
import ExportLogin from '../../../app/service/Login';
import ExportSort from '../../../app/service/Sort';
import ExportTest from '../../../app/service/Test';
import ExportUserInfo from '../../../app/service/UserInfo';
import ExportCollectionIndex from '../../../app/service/collection/Index';
import ExportQuestionIdea from '../../../app/service/question/Idea';
import ExportQuestionIndex from '../../../app/service/question/index';

declare module 'egg' {
  interface IService {
    base: ExportBase;
    login: ExportLogin;
    sort: ExportSort;
    test: ExportTest;
    userInfo: ExportUserInfo;
    collection: {
      index: ExportCollectionIndex;
    }
    question: {
      idea: ExportQuestionIdea;
      index: ExportQuestionIndex;
    }
  }
}
