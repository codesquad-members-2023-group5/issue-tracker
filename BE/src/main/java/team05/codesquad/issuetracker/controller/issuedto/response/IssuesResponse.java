package team05.codesquad.issuetracker.controller.issuedto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class IssuesResponse {
    List<IssueResponse> openIssues;
    List<IssueResponse> closeIssues;
    int openCount;
    int closeCount;

    public IssuesResponse(List<IssueResponse> openIssues, List<IssueResponse> closeIssues) {
        this.openIssues = openIssues;
        this.closeIssues = closeIssues;
        this.openCount = openIssues.size();
        this.closeCount = closeIssues.size();
    }
}
