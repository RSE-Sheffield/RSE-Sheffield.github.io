---
title: HPC Purchasing Guide
permalink: /community/resources-and-equipment/hpc
slug: index
type: text
---

So you want to buy your own dedicated compute resources? There are a number of options available with the pros and cons of this approach discussed below.

###  Buy your own dedicated nodes from IT Services 

This approach is our recommendation for general cases where you have high throughput computing requirements (lots of jobs). This approach is also highly desirable if you need specialist equipment. I.e. You require GPUs, big memory nodes or highly parallel cores. The main advantage of this is that you'll have guaranteed<sup>[1](#footnote)</sup> access to your nodes whenever you want them. Possibly the best route for people who are going to have long, sustained workloads and who know exactly how much compute they need. The disadvantages are that you'll only have access to 'your nodes + (free tier) general pool'. In terms of purchasing, UKRI and other funders allow equipment purchased this way to be costed as equipment on your grant.

We generally recommend this mechanism of purchasing for most users who require more than what can be achieved with the (free tier) general pool.

### Buy a lease on nodes from IT Services

IT Services let you lease nodes by the hour but you usually have to buy several months worth to make this worthwhile. You get guaranteed access to your leased nodes which is great but when your lease runs out you are left with nothing. The hourly rate is much cheaper than cloud computing but, unlike the cloud, you have to pay for your nodes even when you are not using them. We've found that some research groups who lease a node for a year only end up using it about ~10% of the time. This is such a huge waste of money that they may as well have used the cloud instead.

We strongly discourage this form of equipment purchase. Not only does it remove resources from the free tier (effecting the ability of others to complete their compute jobs) but it is a scenario which is far better suited to cloud computing.

### Buy your own hardware and house it somewhere in your department

Please don't do this (except for development machines). The disadvantages are that you'll not be integrated with the rest of our HPC system (job scheduler, backups, permissions management/authentication, monitoring, resiliency mechanisms, security vulnerability management), you won't have access to all of our additional hardware and you won't have access to our support community. You will spend lots of time on administration (please don't under estimate this). Aside from these points, decentralising compute is very difficult to justify from an estates perspective. Unless there are exceptional reasons why you need to have your own kit then there are much better options.

### Buy time on the cloud. 

Perhaps the most flexible option available. Operational costs may be more expensive per unit time than on-premise options but there are few if any capital costs and total operational costs may be less if the cloud is only used when needed. On-demand scaling is an attractive quality too. However, cloud computing services require a different set of skills to use. We do a lot of cloud based work though and will be happy to talk to you about options.

<a name="footnote">1</a>: We are working with IT Services to advice them on a model where unused private nodes are made available to other users. If you buy dedicated equipment you should expect that it will be used by other users when idle but without preventing your from using your kit when you need it.

## Future plans for central HPC

The RSE group work very closely with IT Services and are advising them about future HPC upgrades. In the future we would like to move toward a system where the following purchase options are available.

1. Buying dedicated nodes for high throughput: As described above with an appropriate mechanism in place to allow users to run high risk jobs or other peoples idle kit. These would be high risk in that jobs would be terminated if owners of the kit require immediate access. 
2. Buying priority for traditional HPC: This would allow you to increase your priority for large distributed jobs (traditional HPC) the money invested in purchasing this way would be re-invested to increase HPC computing capacity so that free tier users get the same service.
3. Cloud bursting: This would allow your workflows to transparently be migrated to the cloud. IT Services and the RSE team are currently exploring mechanisms to make this functionality available.  


