package com.dongju.portfolio.domain.dto.portfolio.personalProject.survey;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class SurveyDto {
    private Long uid;
    private String title;
    private Integer description;
}
