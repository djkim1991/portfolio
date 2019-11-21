package com.dongju.portfolio.domain.dto.portfolio.personalProject.miniGame;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GameScoreDto {
    private Long uid;
    private String gameName;
    private String nickName;
    private Integer score;
}
