//
//  UITabBarViewController.swift
//  issue-tracker
//
//  Created by PJB on 2023/05/11.
//

import UIKit

class TabBarViewController: UITabBarController {
    private(set) var issueView = IssueViewController()
    private(set) var labelView = LabelViewController()
    private(set) var mileStoneView = MileStoneViewController()

    override func viewDidLoad() {
        super.viewDidLoad()
        self.setViewControllers([issueView, labelView, mileStoneView], animated: false)
        self.configureColor()
        self.configureTabBarItem()
    }
    
    private func configureColor() {
        self.view.backgroundColor = .systemBackground
        self.tabBar.layer.backgroundColor = UIColor(red: 0.949, green: 0.949, blue: 0.969, alpha: 1).cgColor
    }
    
    private func configureTabBarItem() {
        issueView.tabBarItem = UITabBarItem(title: "이슈", image: UIImage(named: SymbolImage.issueImage.rawValue), tag: 0)
        labelView.tabBarItem = UITabBarItem(title: "레이블", image: UIImage(named: SymbolImage.labelImage.rawValue), tag: 1)
        mileStoneView.tabBarItem = UITabBarItem(title: "마일스톤", image: UIImage(named: SymbolImage.mileStoneImage.rawValue), tag: 2)
    }

}
