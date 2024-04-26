import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import * as uuid from 'uuid';

import { CreateComponentDto } from '../dto/create-component.dto';
import { UpdateComponentDto } from '../dto/update-component.dto';

export type QuestionDataJSON = {
  question_id: string;
  question_type: string;
  display_type: string;
  orientation: string;
  question_text: string;
  img_url: string;
  index: number;
  response: string;
  response_options: object;
  sequence_number: number;
  is_reviewable: boolean;
  is_editable: boolean;
  is_edit_icon_visible: boolean;
  is_hidden: boolean;
  presentation_type: string;
  validations: object;
  parent_question_answer: object;
  question_description: string;
  child_questions: boolean;
  child_questions_on: object;
  question_status: string;
  question_status_message: string;
  hint_text: string;
  sureify_meta: object;
  tooltip: string;
  display_immediately: boolean;
  properties: object;
};

@Entity({ name: 'questions' })
export class Component {
  constructor(params: CreateComponentDto | UpdateComponentDto) {}

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: uuid.v4() })
  uuid!: string;

  @Column({ default: 1 })
  rowStatus!: 0 | 1;

  @Column({ default: 'questions' })
  page_type!: string;

  @Column({ default: 1 })
  page_order!: number;

  @Column()
  sequence_order!: number;

  @Column({ nullable: true })
  product_id!: number;

  @Column()
  question_id!: string;

  @Column({ default: 0 })
  follow_up_question!: number;

  @Column({ type: 'json', nullable: true })
  question_data_json!: QuestionDataJSON;

  @Column({ nullable: true })
  parent_id?: string;

  @Column({ nullable: true })
  parent_question_answer?: string;

  @Column({ default: 4 }) // Todo FK
  carrier_id!: number;

  @Column({ nullable: true })
  application_section_id!: number;

  @Column({ default: 4 }) // Todo FK
  questionnaire_id!: number;

  @Column({ default: null })
  is_challenge?: number;

  @Column({ default: 1 })
  role_insured?: number;

  @Column({ default: 1 })
  role_owner?: number;

  @Column({ default: 1 })
  role_payor?: number;

  @Column({ default: 1 })
  role_agent?: number;

  @Column({ nullable: true })
  user_id?: number;

  @Column({ default: null })
  user_session_id?: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_time!: Date;

  @Column({ default: null, onUpdate: 'CURRENT_TIMESTAMP' })
  modified_time?: Date;

  @Column({ nullable: true })
  sureify_id?: string;

  @Column({ nullable: true })
  test?: string;

  @Column({ type: 'json', nullable: true })
  acord?: object;

  // @BeforeInsert()
  // @BeforeUpdate()
  // json() {
  //   console.log('this.question_data_json', this.question_data_json);
  //   this.question_data_json = JSON.parse(
  //     JSON.stringify(this.question_data_json)
  //   );
  // }

  getQuestionnaire() {
    return {};
  }

  toStateEngineResponse(payload?: any) {
    return {
      code: 200,
      status: true,
      response: {
        other_params: this.buildOtherParams(),
        google_places_config_data: this.buildGooglePlacesConfigData(),
        breadcrumbs: this.buildBreadcrumbs(),
        data: {
          completed: false,
          page_sequence_number: 1,
          ...this.getQuestionnaireHardcode(),
        },
        page_desc: this.buildPageDesc(),
      },
    };
  }

  buildOtherParams() {
    return {
      prev_button_state: 'questions',
      next_button_text: 'Continue',
      prev_button_text: 'Back',
      is_prev_btn_hidden: true,
      is_next_btn_hidden: true,
      session_id: '81c32dcf-a7a8-4301-8614-9ca339a1f3d4',
      uid: '81c32dcf-a7a8-4301-8614-9ca339a1f3d4',
      type: 'plain',
      has_modal: false,
      current_status: 'products',
      buttons: {
        next: {
          hidden: true,
        },
      },
    };
  }

  buildGooglePlacesConfigData() {
    return {
      google_address_prefill: true,
      route: [],
      address_fields_mapping_data: [],
      state_mapping_data: [],
    };
  }

  buildBreadcrumbs() {
    return [];
  }

  buildPageDesc() {
    return {
      desc: null,
      title: null,
      heading: null,
      insurance_company: null,
    };
  }

  getQuestionnaireHardcode() {
    return {
      questionnaire: {
        page_sequence_number: 1,
        questions: {
          index: 2,
          response: '',
          hint_text: '',
          is_hidden: false,
          properties: [],
          is_editable: false,
          orientation: '',
          question_id: 'ProductsBreadcrumb',
          validations: [],
          display_type: 'breadcrumb',
          is_reviewable: false,
          question_text: 'Product Selection',
          question_type: 'group',
          child_questions: false,
          question_status: '',
          sequence_number: 1,
          response_options: [],
          presentation_type: '',
          is_edit_icon_visible: false,
          question_description: '',
          parent_question_answer: [],
          question_status_message: '',
          include_in_additional_pdf: false,
          sureify_meta: {
            source_id: 1,
          },
          questions: [
            {
              index: 2,
              response: '',
              hint_text: '',
              is_hidden: false,
              properties: [],
              is_editable: false,
              orientation: '',
              question_id: 'ProductsGroup',
              validations: [],
              display_type: 'questions_group',
              is_reviewable: false,
              question_text: 'Available Products',
              question_type: 'group',
              child_questions: false,
              question_status: '',
              sequence_number: 1,
              response_options: [],
              presentation_type: '',
              is_edit_icon_visible: false,
              question_description: '',
              parent_question_answer: [],
              question_status_message: '',
              include_in_additional_pdf: false,
              question_subtitle: '',
              sureify_meta: {
                source_id: 1,
              },
              questions: [
                {
                  index: 2,
                  response: '',
                  hint_text: '',
                  is_hidden: false,
                  properties: [],
                  is_editable: false,
                  orientation: '',
                  question_id: 'ProductsQuestion',
                  validations: {
                    required: {
                      value: true,
                      error_message: 'This field is required',
                    },
                  },
                  display_type: 'product_card',
                  is_reviewable: false,
                  question_text: 'Please select a product from below list.',
                  question_type: 'singleselection',
                  child_questions: false,
                  question_status: '',
                  sequence_number: 1,
                  response_options: [
                    {
                      id: '2',
                      label: 'Annuity App - SPIA/DIA',
                      product_details: {
                        name: 'Annuity App - SPIA/DIA',
                        description: null,
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image:
                          'https://acqcdn.s3.amazonaws.com/images/Annuity.svg',
                      },
                    },
                    {
                      id: '3',
                      label: 'Term Life - Long App',
                      product_details: {
                        name: 'Term Life - Long App',
                        description: null,
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image:
                          'https://acqcdn.s3.amazonaws.com/images/Termlife.svg',
                      },
                    },
                    {
                      id: '38',
                      label: 'AAA Apps',
                      product_details: {
                        name: 'AAA Apps',
                        description: '',
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image:
                          'https://www.aaalife.com/webfiles/1639143873790/gen/images/aaa-life-logo.png',
                      },
                    },
                    {
                      id: '41',
                      label: 'ClickSign Example',
                      product_details: {
                        name: 'ClickSign Example',
                        description: 'ClickSign Example',
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                    {
                      id: '42',
                      label: 'SmartLife',
                      product_details: {
                        name: 'SmartLife',
                        description: null,
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                    {
                      id: '43',
                      label: 'Trustmark Group',
                      product_details: {
                        name: 'Trustmark Group',
                        description: null,
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                    {
                      id: '46',
                      label: 'GL1',
                      product_details: {
                        name: 'GL1',
                        description: '',
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                    {
                      id: '48',
                      label: 'feb111',
                      product_details: {
                        name: 'feb111',
                        description: '',
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                    {
                      id: '51',
                      label: 'Section Reflex',
                      product_details: {
                        name: 'Section Reflex',
                        description: 'Section Reflex',
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                    {
                      id: '52',
                      label: 'LA-1461',
                      product_details: {
                        name: 'LA-1461',
                        description: 'LA-1461',
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                    {
                      id: '53',
                      label: 'LA-1462',
                      product_details: {
                        name: 'LA-1462',
                        description: 'LA-1462',
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                    {
                      id: '54',
                      label: 'Guardian POC',
                      product_details: {
                        name: 'Guardian POC',
                        description: '',
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                    {
                      id: '55',
                      label: 'Test 506',
                      product_details: {
                        name: 'Test 506',
                        description: '',
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                    {
                      id: '57',
                      label: 'barry test',
                      product_details: {
                        name: 'barry test',
                        description: 'barry test',
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                    {
                      id: '58',
                      label: 'test cosmosmarc3 prdct',
                      product_details: {
                        name: 'test cosmosmarc3 prdct',
                        description: '',
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                    {
                      id: '59',
                      label: 'Testing Questionnar',
                      product_details: {
                        name: 'Testing Questionnar',
                        description: '',
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                    {
                      id: '60',
                      label: 'LA-1472',
                      product_details: {
                        name: 'LA-1472',
                        description: '',
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                    {
                      id: '61',
                      label: 'testmar21 prdct',
                      product_details: {
                        name: 'testmar21 prdct',
                        description: '',
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                    {
                      id: '66',
                      label: 'Testmarch31 prdct',
                      product_details: {
                        name: 'Testmarch31 prdct',
                        description: 'Testmarch31 prdct decsription',
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image:
                          'https://symetra-dev-sureify.s3.amazonaws.com/1648708294681661474.imagee.png',
                      },
                    },
                    {
                      id: '68',
                      label: 'test1466 prdct',
                      product_details: {
                        name: 'test1466 prdct',
                        description: 'test1466 prdct description',
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                    {
                      id: '72',
                      label: 'Whole Life',
                      product_details: {
                        name: 'Whole Life',
                        description: null,
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                    {
                      id: '73',
                      label: 'Universal Life',
                      product_details: {
                        name: 'Universal Life',
                        description: null,
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                    {
                      id: '76',
                      label: 'test1648',
                      product_details: {
                        name: 'test1648',
                        description: '',
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                    {
                      id: '80',
                      label: 'Test June15 product',
                      product_details: {
                        name: 'Test June15 product',
                        description: '',
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                    {
                      id: '81',
                      label: 'Term',
                      product_details: {
                        name: 'Term',
                        description: null,
                        button_text: 'Select this Product',
                        button_selected_text: 'Product selected',
                        image: null,
                      },
                    },
                  ],
                  presentation_type: '',
                  is_edit_icon_visible: false,
                  question_description: '',
                  parent_question_answer: [],
                  question_status_message: '',
                  include_in_additional_pdf: false,
                  sureify_meta: {
                    source_id: 1,
                  },
                  questions: [],
                },
              ],
            },
          ],
          section_progress: {
            total_sections: 1,
            current_section_number: 0,
          },
        },
        completed: false,
      },
      popup_questions: [],
      banners: [],
      triggers: [],
    };
  }
}
