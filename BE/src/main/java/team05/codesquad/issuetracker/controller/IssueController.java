package team05.codesquad.issuetracker.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import team05.codesquad.issuetracker.controller.issuedto.request.IssueRequest;
import team05.codesquad.issuetracker.controller.issuedto.response.IssueResponse;
import team05.codesquad.issuetracker.controller.issuedto.response.IssuesResponse;
import team05.codesquad.issuetracker.service.IssueService;

import java.net.URI;

@Slf4j
@RestController
@RequestMapping("/issues")
public class IssueController {

    private final IssueService issueService;

    @Autowired
    public IssueController(IssueService issueService) {
        this.issueService = issueService;
    }

    // 기본화면일때, 다시 openIssue눌렀을때
    @GetMapping
    public ResponseEntity<IssuesResponse> getIssues(@RequestParam(defaultValue = "true") Boolean isOpened) {
        return ResponseEntity.ok().body(issueService.findAll());
    }

    @GetMapping("/{issueId}")
    public ResponseEntity<IssueResponse> findById(@PathVariable Long issueId) {
        return ResponseEntity.ok().body(issueService.findById(issueId));
    }

    @PostMapping
    public ResponseEntity<Void> writeIssue(@RequestBody IssueRequest issueRequest) {
        IssueResponse createdIssue = issueService.createIssue(issueRequest);
        //return new ResponseEntity<>(createdIssue, HttpStatus.CREATED);
        return ResponseEntity.created(URI.create("/issues/" + createdIssue.getId())).build();
    }
}

