package com.dongju.portfolio.domain.dto.portfolio.personalProject.miniGame;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GameScoreDto {
    private Long uid;
    private String gameName;
    private String nickName;
    private Integer score;
}
